import { AuthDataSource, AuthRepository, RegisterClientDto, ClientsEntity } from "../../../domain";

export class AuthRepositoryImpl implements AuthRepository {

    constructor(
        private readonly authDataSource: AuthDataSource,
    ){}

    register(registerClientDto: RegisterClientDto): Promise<ClientsEntity> {
        return this.authDataSource.register(registerClientDto);
    }
    
}