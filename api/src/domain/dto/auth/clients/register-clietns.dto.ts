import { Validators } from '../../../../config'

export class RegisterClientDto {
    private constructor(
        
        public name: string,
        public lastName: string,    
        public email: string,
        public phone: number,
        public address: string,
        public assistance: string,
        public idCenter: number,
    ){}

        static create( object: {[ key: string]: any;}): [ string?, RegisterClientDto?] {

            const { name ,lastName, email, assistance, address, phone, idCenter } = object;

            if ( !name ) return [ 'Missing name' ];
            if ( !lastName ) return [ 'Missing lastName' ];
            if ( !email ) return [ 'Missing email' ];
            if ( !phone ) return [ 'Missing phone' ];
            if ( !address ) return [ 'Missing address' ];
            if ( !idCenter ) return [ 'Missing id center' ];
            if ( !Validators.email.test( email ) ) return [ 'Email is not valid '];
            
            return [
                undefined,
                new RegisterClientDto(name,lastName, email, phone, address , assistance, idCenter)
            ];
        }
}