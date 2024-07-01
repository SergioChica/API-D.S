interface Client {
    id: string,
    name: string,
    lastName: string,
    email: string,
    password: string,
    address: string,
}

export class Database {
    public clients: Client[] = [];

    addClient(client: Client): Client {
        this.clients.push(client);
        return client
    }

    findClientByEmail(email:string): Client | undefined {
        return this.clients.find(client => client.email === email);
    }

    findClientById(id:string): Client | undefined {
        return this.clients.find(client => client.id === id)
    }
}