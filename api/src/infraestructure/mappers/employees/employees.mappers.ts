import { EmployeesEntity } from "../../../data";
import { CustomError } from "../../../domain";

export class EmployeesMapper {
    public static toDomain(object: any): EmployeesEntity {
        const { id, name, email, phone, password, address, idCenter } = object;

        if (!id) {
            throw CustomError.badRequest("Missing id");
        }

        if (!name) throw CustomError.badRequest("Missing name");
        if (!email) throw CustomError.badRequest("Missing email");
        if (!phone) throw CustomError.badRequest("Missing phone");
        if (!password) throw CustomError.badRequest("Missing password");
        if (!address) throw CustomError.badRequest("Missing address");
        if (!idCenter) throw CustomError.badRequest("Missing id Center");

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

    public static toPersistence(entity: EmployeesEntity): any {
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