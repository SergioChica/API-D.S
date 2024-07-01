export class ClientsEntity {
    constructor(
        public id: string,
        public name: string,
        public lastName: string,
        public email: string,
        public password: string,
        public address: string,
    ){}
}