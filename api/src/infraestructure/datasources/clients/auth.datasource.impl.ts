import { BcryptAdapter } from "../../../config";
import { ClientModel } from "../../../data";
import { AuthDataSource, CustomError, RegisterClientDto, ClientsEntity } from "../../../domain";
import { ClientMapper } from "../../mappers/clients/client.mappers";

type HashFuntion = (password: string) => string;
type CompareFunction = (password: string, hashed: string) => boolean;
export class AuthDataSourceImpl implements AuthDataSource {

    constructor(
        private readonly hashPassword: HashFuntion = BcryptAdapter.hash,
        private readonly comparePassword: CompareFunction = BcryptAdapter.compare
    ) {}
    
    async register(registerClientDto: RegisterClientDto): Promise<ClientsEntity> {
        const { name, lastName, email, password, address } = registerClientDto;


        try {

            const exists = await ClientModel.findOne({ email });
            if (exists) throw CustomError.badRequest("User already exists")

            const newClient = await ClientModel.create({
                name: name,
                lastName: lastName,
                email: email,
                address: address,
                password: this.hashPassword(password),
            });
           
            await newClient.save();

            return ClientMapper.clientEntityFromObject(newClient)
            
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }



}