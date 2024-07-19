import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { BcryptAdapter } from "../../../config";
import { AuthEmployeesDataSource, CustomError, RegisterEmployeesDto} from "../../../domain";
import { EmployeesMapper } from "../../mappers/employees/employees.mappers";
import { EmployeesEntity } from "../../../data";
import { envs } from '../../../config';
import jwt from 'jsonwebtoken';

export class AuthEmployeesDataSourceImpl implements AuthEmployeesDataSource {
    private readonly employeesRepository: Repository<EmployeesEntity>;

    constructor() {
        this.employeesRepository = AppDataSource.getRepository(EmployeesEntity);
    }
    
    async register(registerEmployeesDto: RegisterEmployeesDto): Promise<EmployeesEntity> {
        const { name, email, phone, address, password, idCenter} = registerEmployeesDto;

        const hashedPassword = BcryptAdapter.hash(password);
        
        try {

            const existingEmployees = await this.employeesRepository.findOne({ where: { email } });
            if (existingEmployees) throw CustomError.badRequest("User already exists")

            const newClient = this.employeesRepository.create({
                name: name,
                email: email,
                phone: phone,
                address: address,
                password: hashedPassword,
                idCenter: idCenter,
            });
           
            await this.employeesRepository.save(newClient);

            return EmployeesMapper.toDomain(newClient);
            
        } catch (error) {
            // console.error("Error registering client:", error);
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async   login(email:string, password: string): Promise<{ token: string, message: string }> {
        try {
            const employees = await this.employeesRepository.findOne({ where: { email }});
            if (!employees) throw CustomError.badRequest("Invalid crendetials");

            if (!employees.password) throw CustomError.unauthorized("Invalid credentials");
            
            const isPasswordValid = BcryptAdapter.compare(password, employees.password);
            if (!isPasswordValid) throw CustomError.unauthorized("Invalid crendetials");

            const token = jwt.sign({ id: employees.id, email: employees.email}, envs.JWT_SECRET,{
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