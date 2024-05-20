import { ClientsEntity } from "../../entities/auth/clients/clients.entity";
import { RegisterClientDto } from "../../dto/auth/clients/register-clietns.dto";

export abstract class AuthDataSource {
    abstract register(registerClientDto:RegisterClientDto): Promise<ClientsEntity>
}