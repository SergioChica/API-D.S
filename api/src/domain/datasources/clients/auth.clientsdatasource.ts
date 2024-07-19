import { ClientsEntity } from "../../../data";
import { RegisterClientDto } from "../../dto/auth/clients/register-clietns.dto";

export abstract class AuthClientsDataSource {
    abstract register(registerClientDto:RegisterClientDto): Promise<ClientsEntity>
    // abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
}