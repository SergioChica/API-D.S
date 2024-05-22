import { RegisterClientDto } from "../../dto/auth/clients/register-clietns.dto";
import { ClientsEntity } from "../../entities/auth/clients/clients.entity";
import { UpdateClientDto } from "../../dto/auth/clients/update-clietns.dto";

export abstract class AuthRepository {
    abstract register(registerClientDto:RegisterClientDto): Promise<ClientsEntity>
    abstract login(emai: string, password: string): Promise<ClientsEntity>
    abstract getClientById(id: string): Promise<ClientsEntity>
    abstract updateClient(id: string, updateClientDto: UpdateClientDto): Promise<ClientsEntity>  
}