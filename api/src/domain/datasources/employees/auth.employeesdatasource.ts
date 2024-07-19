import { EmployeesEntity } from "../../../data";
import { RegisterEmployeesDto } from "../../dto/auth/employees/register-clietns.dto";

export abstract class AuthEmployeesDataSource {
    abstract register(egisterEmployeesDto:RegisterEmployeesDto): Promise<EmployeesEntity>
    abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
}