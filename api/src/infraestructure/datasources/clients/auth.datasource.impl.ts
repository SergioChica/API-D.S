import { AuthDataSource, CustomError, RegisterClientDto, ClientsEntity, UpdateClientDto } from "../../../domain";
import { Database } from "../../../data/Database";
export class AuthDataSourceImpl implements AuthDataSource {
    private db: Database;

    constructor(){
        this.db = new Database();
    }
    
    
    async register(registerClientDto: RegisterClientDto): Promise<ClientsEntity> {
        const {name, email, password } = registerClientDto;
        
        const existingClient = this.db.findClientByEmail(email)
        if (existingClient) {
            throw CustomError.badRequest(' Client already exists')
        }

        try{

            const newClient=  new ClientsEntity(
                (this.db.clients.length + 1).toString(),
                name,
                email,
                password
            );

            this.db.addClient(newClient);
            return newClient;
        }catch(error){
            if(error instanceof CustomError){
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async login(email: string, password: string): Promise<ClientsEntity> {
        const client = this.db.findClientByEmail(email);
        if (!client || client.password !== password) {
            throw CustomError.unauthorized('Invalid credentials')
        }
        return client;
    }

    async getClientById(id: string): Promise<ClientsEntity> {
        const  client = this.db.findClientById(id);
        if (!client) {
            throw CustomError.notFound('User not found')
        }
        return client
    }

    async updateClient(id: string, updateClientDto: UpdateClientDto): Promise<ClientsEntity> {
        const client = this.db.findClientById(id);
        if (!client) {
            throw CustomError.notFound('User not found')
        }

        Object.assign(client, updateClientDto)
        return client
    }

}