import { RegisterClientDto } from "../../dto/auth/clients/register-clietns.dto";
import { ClientsEntity } from "../../entities/auth/clients/clients.entity";

export abstract class AuthRepository {
    abstract register(registerClientDto:RegisterClientDto): Promise<ClientsEntity>
}