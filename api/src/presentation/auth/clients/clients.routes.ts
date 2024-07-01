import { Router } from "express";
import { AuthClientsController } from "./clients.controller";
import { AuthDataSourceImpl, AuthRepositoryImpl } from "../../../infraestructure";


export class AuthClientsRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new AuthDataSourceImpl();
        const AuthRepository = new AuthRepositoryImpl(datasource); 
        const controller = new AuthClientsController(AuthRepository);

        router.post('/login', controller.loginClient);
        router.post('/register', controller.registerClient)

        return router;
    }
}