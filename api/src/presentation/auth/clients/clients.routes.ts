import { Router } from "express";
import { AuthClientsController } from "./clients.controller";
import { AuthClientsDataSourceImpl, AuthClientsRepositoryImpl } from "../../../infraestructure";


export class AuthClientsRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new AuthClientsDataSourceImpl();
        const AuthRepository = new AuthClientsRepositoryImpl(datasource); 
        const controller = new AuthClientsController(AuthRepository);

        // router.post('/login', controller.loginClient);
        router.post('/register', controller.registerClient)
        router.get('/clients', controller.getAllClients)
        router.get('/clients/:id', controller.getClientById)

        return router;
    }
}