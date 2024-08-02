import { Validators } from '../../../../config'

export class RegisterClientDto {
    private constructor(
        
        public id: number,
        public name: string,
        public lastName: string,    
        public email: string,
        public phone: number,
        public address: string,
        public assistance: string,
        public idCenter: number,
    ){}

        static create( object: {[ key: string]: any;}): [ string?, RegisterClientDto?] {

            const { id, name ,lastName, email, assistance, address, phone, idCenter } = object;

            if ( !id ) return [ 'Falta la cedula' ];
            if ( !Validators.number.test( id ) ) return [ 'Solo caracteres numericos en numero de cedula'];
            if ( !name ) return [ 'Falta el Nombre' ];
            if ( !Validators.text.test( name ) ) return [ 'Nombre no valido'];
            if ( !lastName ) return [ 'Falta el apellido' ];
            if ( !Validators.text.test( lastName ) ) return [ 'Apellido no valido'];
            if ( !email ) return [ 'Falta el Correo' ];
            if ( !Validators.email.test( email ) ) return [ 'Email is not valid '];
            if ( !phone ) return [ 'Falta el Numero telefonico' ];
            if ( !Validators.number.test( phone ) ) return [ 'Solo caracteres numericos en numero telefonico'];
            if ( !address ) return [ 'Falta la direccion' ];
            if ( !assistance ) return [ 'Falta la direccion' ];
            if ( !idCenter ) return [ 'Falta el id del Centro' ];
            if ( !Validators.number.test( idCenter ) ) return [ 'Solo caracteres numericos en id centro'];
            
            return [
                undefined,
                new RegisterClientDto(id, name,lastName, email, phone, address , assistance, idCenter)
            ];
        }
}