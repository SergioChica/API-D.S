import { CustomError, ClientsEntity } from "../../../domain";


export class ClientMapper {

    static clientEntityFromObject(object: { [key: string]: any}) {

        const { id, _id, name, lastName, email, password, address} = object;

        if (!_id || !id) {
            throw CustomError.badRequest("Missing id")
        }

        if (!name) throw CustomError.badRequest("Missing name");
        if (!lastName) throw CustomError.badRequest("Missing lastName");
        if (!email) throw CustomError.badRequest("Missing email");
        if (!password) throw CustomError.badRequest("Missing password");
        if (!address) throw CustomError.badRequest("Missing address");

        return new ClientsEntity(_id || id, name, lastName, email, password, address);      
        
    }
}