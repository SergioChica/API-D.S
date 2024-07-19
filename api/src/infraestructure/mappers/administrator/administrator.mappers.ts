import { AdministratorEntity } from "../../../data";
import { CustomError } from "../../../domain";

export class AdministratorMapper {
    public static toDomain(object: any): AdministratorEntity {
        const { id, name, email, phone, password, address, idCenter } = object;

        if (!id) {
            throw CustomError.badRequest("Missing id");
        }

        if (!name) throw CustomError.badRequest("Missing name");
    
        if (!email) throw CustomError.badRequest("Missing email");
        if (!phone) throw CustomError.badRequest("Missing phone");
        if (!password) throw CustomError.badRequest("Missing password");
        if (!address) throw CustomError.badRequest("Missing address");
        if (!idCenter) throw CustomError.badRequest("Missing idCenter");

        return {
            id,
            name,
            email,
            phone,
            password,
            address,
            idCenter,
        };
    }

    public static toPersistence(entity: AdministratorEntity): any {
        return {
            id: entity.id,
            name: entity.name,
            email: entity.email,
            phone: entity.phone,
            password: entity.password,
            address: entity.address,
            idCenter: entity.idCenter,
        };
    }
}