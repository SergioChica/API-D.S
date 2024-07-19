import { Validators } from '../../../../config'

export class RegisterAdministratorDto {
    private constructor(
        
        public name: string,  
        public email: string,
        public phone: number,
        public address: string,
        public password: string,
        public idCenter: number,
    ){}

        static create( object: {[ key: string]: any;}): [ string?, RegisterAdministratorDto?] {

            const { name, email, password, address, phone, idCenter } = object;

            if ( !name ) return [ 'Missing name' ];
            if ( !email ) return [ 'Missing email' ];
            if ( !phone ) return [ 'Missing phone' ];
            if ( !address ) return [ 'Missing address' ];
            if ( !idCenter ) return [ 'Missing id center' ];
            if ( !Validators.email.test( email ) ) return [ 'Email is not valid '];
            if ( !password ) return [ 'Missing password' ];
            if ( password.length < 6 ) return [ 'Password too short ' ];
            
            return [
                undefined,
                new RegisterAdministratorDto(name, email, phone, address , password, idCenter)
            ];
        }
}