import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { BcryptAdapter } from "../../../config";
// import { ClientModel } from "../../../data";
import { AuthDataSource, CustomError, RegisterClientDto, ClientsEntity } from "../../../domain";
import { ClientMapper } from "../../mappers/clients/client.mappers";

// type HashFuntion = (password: string) => string;
// type CompareFunction = (password: string, hashed: string) => boolean;
export class AuthDataSourceImpl implements AuthDataSource {
    private readonly clientRepository: Repository<ClientsEntity>;

    constructor() {
        this.clientRepository = AppDataSource.getRepository(ClientsEntity);
    }
    
    async register(registerClientDto: RegisterClientDto): Promise<ClientsEntity> {
        const { name, email, password, address } = registerClientDto;

        const hashedPassword = BcryptAdapter.hash(password);
        
        try {

            const existingClient = await this.clientRepository.findOne({ where: { email } });
            if (existingClient) throw CustomError.badRequest("User already exists")

            const newClient = this.clientRepository.create({
                name: name,
                email: email,
                address: address,
                password: hashedPassword,
            });
           
            await this.clientRepository.save(newClient);

            return ClientMapper.toDomain(newClient);
            
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }



}