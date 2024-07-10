import { ClientsEntity } from "../../../data/entities/auth/clients/clients.entity";
import { RegisterClientDto } from "../../dto/auth/clients/register-clietns.dto";

export abstract class AuthDataSource {
    abstract register(registerClientDto:RegisterClientDto): Promise<ClientsEntity>
    abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
}