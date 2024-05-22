import { Validators } from '../../../../config'
import { ClientsEntity } from '../../../entities/auth/clients/clients.entity';


export class UpdateClientDto {
    readonly name?: string;
    readonly email?: string;
    readonly password?: string;
    
    private constructor(data: Partial<ClientsEntity>){
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
    }

        static update( data: Partial<ClientsEntity>): [ string?, UpdateClientDto?] {

            const { name, email, password } = data;

            if ( !name ) return [ 'Missing name' ];
            if ( !email ) return [ 'Missing email' ];
            if ( !Validators.email.test( email ) ) return [ 'Email is not valid '];
            if ( !password ) return [ 'Missing password' ];
            if ( password.length < 6 ) return [ 'Password too short ' ];
            
            return [
                undefined,
                new UpdateClientDto({name,email,password})
            ];
        }
}