import { AdministratorEntity } from "../../../data";
import { RegisterAdministratorDto } from "../../dto/auth/administrator/register-administrator.dto";

export abstract class AuthAdministratorDataSource {
    abstract register(registerAdministratorDto:RegisterAdministratorDto): Promise<AdministratorEntity>
    abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
}