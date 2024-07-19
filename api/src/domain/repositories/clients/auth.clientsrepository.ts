import { RegisterClientDto } from "../../dto/auth/clients/register-clietns.dto";
import { ClientsEntity } from "../../../data/entities/auth/clients/clients.entity";

export abstract class AuthClientsRepository {
    abstract register(registerClientDto:RegisterClientDto): Promise<ClientsEntity>
    // abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
}