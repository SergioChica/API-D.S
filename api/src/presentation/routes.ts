import { Router } from "express";
import { AuthClientsRoutes } from "./auth/clients/clients.routes";


export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/fram/auth/clients', AuthClientsRoutes.routes)

        return router;
    }
}