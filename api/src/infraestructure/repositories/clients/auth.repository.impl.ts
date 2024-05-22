import { AuthDataSource, AuthRepository, RegisterClientDto, ClientsEntity, UpdateClientDto } from "../../../domain";

export class AuthRepositoryImpl implements AuthRepository {

    constructor(
        private readonly authDataSource: AuthDataSource,
    ){}

    register(registerClientDto: RegisterClientDto): Promise<ClientsEntity> {
        return this.authDataSource.register(registerClientDto);
    }

    login(email: string, password: string): Promise<ClientsEntity> {
        return this.authDataSource.login(email,password);
    }

    getClientById(id: string): Promise<ClientsEntity> {
        return this.authDataSource.getClientById(id)
    }

    updateClient(id: string, updateClientDto: UpdateClientDto): Promise<ClientsEntity> {
        return this.authDataSource.updateClient(id,updateClientDto)
    }
    
}