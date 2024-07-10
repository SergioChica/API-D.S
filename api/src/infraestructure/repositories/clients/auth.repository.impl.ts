import { ClientsEntity } from "../../../data";
import { AuthDataSource, AuthRepository, RegisterClientDto } from "../../../domain";
export class AuthRepositoryImpl implements AuthRepository {

    constructor(
        private readonly authDataSource: AuthDataSource,
    ){}

    register(registerClientDto: RegisterClientDto): Promise<ClientsEntity> {
        return this.authDataSource.register(registerClientDto);
    }

    login(email: string, password: string): Promise<{ token: string, message: string }> {
        return this.authDataSource.login(email, password);
    }

}