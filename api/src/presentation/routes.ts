import { Router } from "express";
import { AuthClientsRoutes } from "./auth/clients/clients.routes";
import { AuthEmployeesRoutes } from "./auth/employees/employees.routes";
import { AuthEstablishmentRoutes } from "./auth/establishment/establishment.routes";
import { AuthAdministratorRoutes } from "./auth/administrator/administrator.routes";
import { AuthProductsRoutes } from "./auth/products/products.routes";


export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/ds/auth/clients', AuthClientsRoutes.routes)
        router.use('/ds/auth/employees', AuthEmployeesRoutes.routes)
        router.use('/ds/auth/establishment', AuthEstablishmentRoutes.routes)
        router.use('/ds/auth/administrator', AuthAdministratorRoutes.routes)
        router.use('/ds/auth/products', AuthProductsRoutes.routes)

        return router;
    }
}