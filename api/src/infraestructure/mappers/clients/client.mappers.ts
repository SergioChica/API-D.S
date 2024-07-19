import { ClientsEntity } from "../../../data";
import { CustomError } from "../../../domain";

export class ClientMapper {
    public static toDomain(object: any): ClientsEntity {
        const { id, name, lastName, email, phone, assistance, address, idCenter } = object;

        if (!id) {
            throw CustomError.badRequest("Missing id");
        }

        if (!name) throw CustomError.badRequest("Missing name");
        if (!lastName) throw CustomError.badRequest("Missing lastName");
        if (!email) throw CustomError.badRequest("Missing email");
        if (!phone) throw CustomError.badRequest("Missing phone");
        if (!assistance) throw CustomError.badRequest("Missing assistance");
        if (!address) throw CustomError.badRequest("Missing address");
        if (!idCenter) throw CustomError.badRequest("Missing idCenter");

        return {
            id,
            name,
            lastName,
            email,
            phone,
            assistance,
            address,
            idCenter,
        };
    }

    public static toPersistence(entity: ClientsEntity): any {
        return {
            id: entity.id,
            name: entity.name,
            lastName: entity.lastName,
            email: entity.email,
            phone: entity.phone,
            assistance: entity.assistance,
            address: entity.address,
            idCenter: entity.idCenter,
        };
    }
}