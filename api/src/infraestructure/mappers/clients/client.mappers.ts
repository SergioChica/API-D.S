import { ClientsEntity } from "../../../data";
import { CustomError } from "../../../domain";

export class ClientMapper {
    public static toDomain(object: any): ClientsEntity {
        const { id, name, lastName, email, phone, password, address } = object;

        if (!id) {
            throw CustomError.badRequest("Missing id");
        }

        if (!name) throw CustomError.badRequest("Missing name");
        if (!lastName) throw CustomError.badRequest("Missing lastName");
        if (!email) throw CustomError.badRequest("Missing email");
        if (!phone) throw CustomError.badRequest("Missing phone");
        if (!password) throw CustomError.badRequest("Missing password");
        if (!address) throw CustomError.badRequest("Missing address");

        return {
            id,
            name,
            lastName,
            email,
            phone,
            password,
            address,
        };
    }

    public static toPersistence(entity: ClientsEntity): any {
        return {
            id: entity.id,
            name: entity.name,
            lastName: entity.lastName,
            email: entity.email,
            phone: entity.phone,
            password: entity.password,
            address: entity.address,
        };
    }
}