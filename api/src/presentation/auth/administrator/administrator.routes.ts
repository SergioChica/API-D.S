import { Router } from "express";
import { AuthAdministratorController } from "./administrator.controller";
import { AuthAdministratorDataSourceImpl, AuthAdministratorRepositoryImpl } from "../../../infraestructure";


export class AuthAdministratorRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new AuthAdministratorDataSourceImpl();
        const AuthRepository = new AuthAdministratorRepositoryImpl(datasource); 
        const controller = new AuthAdministratorController(AuthRepository);

        router.post('/login', controller.loginAdministrator);
        router.post('/register', controller.registerAdministrator)

        return router;
    }
}