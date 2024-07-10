import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { BcryptAdapter } from "../../../config";
// import { ClientModel } from "../../../data";
import { AuthDataSource, CustomError, RegisterClientDto} from "../../../domain";
import { ClientMapper } from "../../mappers/clients/client.mappers";
import { ClientsEntity } from "../../../data";
import { envs } from '../../../config';
import jwt from 'jsonwebtoken';

// type HashFuntion = (password: string) => string;
// type CompareFunction = (password: string, hashed: string) => boolean;
export class AuthDataSourceImpl implements AuthDataSource {
    private readonly clientRepository: Repository<ClientsEntity>;

    constructor() {
        this.clientRepository = AppDataSource.getRepository(ClientsEntity);
    }
    
    async register(registerClientDto: RegisterClientDto): Promise<ClientsEntity> {
        const { name, lastName, email, phone, address, password} = registerClientDto;

        const hashedPassword = BcryptAdapter.hash(password);
        
        try {

            const existingClient = await this.clientRepository.findOne({ where: { email } });
            if (existingClient) throw CustomError.badRequest("User already exists")

            const newClient = this.clientRepository.create({
                name: name,
                lastName: lastName,
                email: email,
                phone: phone,
                address: address,
                password: hashedPassword,
            });
           
            await this.clientRepository.save(newClient);

            return ClientMapper.toDomain(newClient);
            
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
            const client = await this.clientRepository.findOne({ where: { email }});
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