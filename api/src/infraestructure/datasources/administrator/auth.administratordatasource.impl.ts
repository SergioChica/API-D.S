import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { BcryptAdapter } from "../../../config";
import { AuthAdministratorDataSource, CustomError, RegisterAdministratorDto} from "../../../domain";
import { AdministratorMapper } from "../../mappers/administrator/administrator.mappers";
import { AdministratorEntity } from "../../../data";
import { envs } from '../../../config';
import jwt from 'jsonwebtoken';

export class AuthAdministratorDataSourceImpl implements AuthAdministratorDataSource {
    private readonly administratorRepository: Repository<AdministratorEntity>;

    constructor() {
        this.administratorRepository = AppDataSource.getRepository(AdministratorEntity);
    }
    
    async register(registerAdministratorDto: RegisterAdministratorDto): Promise<AdministratorEntity> {
        const { name, email, phone, address, password, idCenter} = registerAdministratorDto;

        const hashedPassword = BcryptAdapter.hash(password);
        
        try {

            const existingAdministrator = await this.administratorRepository.findOne({ where: { email } });
            if (existingAdministrator) throw CustomError.badRequest("User already exists")

            const newAdministrator = this.administratorRepository.create({
                name: name,
                email: email,
                phone: phone,
                address: address,
                password: hashedPassword,
                idCenter: idCenter,
            });
           
            await this.administratorRepository.save(newAdministrator);

            return AdministratorMapper.toDomain(newAdministrator);
            
        } catch (error) {
            // console.error("Error registering client:", error);
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async login(email:string, password: string): Promise<{ token: string, message: string }> {
        try {
            const client = await this.administratorRepository.findOne({ where: { email }});
            if (!client) throw CustomError.badRequest("Invalid crendetials");

            if (!client.password) throw CustomError.unauthorized("Invalid credentials");
            
            const isPasswordValid = BcryptAdapter.compare(password, client.password);
            if (!isPasswordValid) throw CustomError.unauthorized("Invalid crendetials");

            const token = jwt.sign({ id: client.id, email: client.email}, envs.JWT_SECRET,{
                expiresIn: '1h',
            });

            return {
                token,
                message: "Login successful"
            };
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

}