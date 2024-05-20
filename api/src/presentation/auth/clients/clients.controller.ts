import { Request, Response } from "express";
import { RegisterClientDto, AuthRepository } from "../../../domain";

export class AuthClientsController {
    
    constructor(
        private readonly authRepository: AuthRepository
    ){}

    registerClient = (req: Request, res: Response) => {
       const [error, registerClientDto] = RegisterClientDto.create(req.body);
       if ( error ) return res.status(400).json({ error });
       
       this.authRepository.register(registerClientDto!)
       .then( client => res.json(client) )
       .catch( error => res.status(500).json(error) )
    }

    loginClient = (req: Request, res: Response) => {
        res.json('loginClient controller')
    }
}