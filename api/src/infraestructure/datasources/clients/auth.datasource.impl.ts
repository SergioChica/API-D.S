import { AuthDataSource, CustomError, RegisterClientDto, ClientsEntity } from "../../../domain";

export class AuthDataSourceImpl implements AuthDataSource {
    async register(registerClientDto: RegisterClientDto): Promise<ClientsEntity> {
        const {name, email, password } = registerClientDto;

        try{

            return new ClientsEntity(
                '1',
                name,
                email,
                password
            );
        }catch(error){
            if(error instanceof CustomError){
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

}