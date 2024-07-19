import { ClientsEntity } from "../../../data";
import { AuthClientsDataSource, AuthClientsRepository, RegisterClientDto } from "../../../domain";
export class AuthClientsRepositoryImpl implements AuthClientsRepository {

    constructor(
        private readonly authClientsDataSource: AuthClientsDataSource,
    ){}

    register(registerClientDto: RegisterClientDto): Promise<ClientsEntity> {
        return this.authClientsDataSource.register(registerClientDto);
    }

    // login(email: string, password: string): Promise<{ token: string, message: string }> {
    //     return this.authClientsDataSource.login(email, password);
    // }

}