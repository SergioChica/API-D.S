import { CustomError, ClientsEntity } from "../../../domain";


export class ClientMapper {
    public static toDomain(object: any): ClientsEntity {
        const { id, name, email, password, address } = object;

        if (!id) {
            throw new Error("Missing id");
        }

        if (!name) throw new Error("Missing name");
        if (!email) throw new Error("Missing email");
        if (!password) throw new Error("Missing password");
        if (!address) throw new Error("Missing address");

        return {
            id,
            name,
            email,
            password,
            address,
        };
    }

    public static toPersistence(entity: ClientsEntity): any {
        return {
            id: entity.id,
            name: entity.name,
            email: entity.email,
            password: entity.password,
            address: entity.address,
        };
    }
}