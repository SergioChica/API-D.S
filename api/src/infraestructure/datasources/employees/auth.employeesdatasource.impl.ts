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
            if (existingEmployees) throw CustomError.badRequest("Este empleado ya existe")

            const newEmployees = this.employeesRepository.create({
                name: name,
                email: email,
                phone: phone,
                address: address,
                password: hashedPassword,
                idCenter: idCenter,
            });
           
            await this.employeesRepository.save(newEmployees);

            return EmployeesMapper.toDomain(newEmployees);
            
        } catch (error) {
            console.error("Error registering Employees:", error);
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async login(email:string, password: string): Promise<{ token: string, message: string }> {
        try {
            const employees = await this.employeesRepository.findOne({ where: { email }});
            if (!employees) throw CustomError.badRequest("Correo invalido");

            if (!employees.password) throw CustomError.unauthorized("Contraseña Invalida");
            
            const isPasswordValid = BcryptAdapter.compare(password, employees.password);
            if (!isPasswordValid) throw CustomError.unauthorized("Contraseña Invalida");

            const token = jwt.sign({ data: {email: employees.email}}, envs.JWT_SECRET, {expiresIn: '1h',});

            return {
                token,
                message: "Inicio de sesion exitoso"
            };
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

}