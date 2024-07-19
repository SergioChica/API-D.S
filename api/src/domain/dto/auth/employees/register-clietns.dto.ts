import { Validators } from '../../../../config'

export class RegisterEmployeesDto {
    private constructor(
        
        public name: string,   
        public email: string,
        public phone: number,
        public address: string,
        public password: string,
        public idCenter: number,
    ){}

        static create( object: {[ key: string]: any;}): [ string?, RegisterEmployeesDto?] {

            const { name, email, password, address, idCenter, phone } = object;

            if ( !name ) return [ 'Missing name' ];
            if ( !email ) return [ 'Missing email' ];
            if ( !phone ) return [ 'Missing phone' ];
            if ( !idCenter ) return [ 'Missing idCenter' ];
            if ( !address ) return [ 'Missing address' ];
            if ( !Validators.email.test( email ) ) return [ 'Email is not valid '];
            if ( !password ) return [ 'Missing password' ];
            if ( password.length < 6 ) return [ 'Password too short ' ];
            
            return [
                undefined,
                new RegisterEmployeesDto(name, email, phone, address, idCenter, password)
            ];
        }
}