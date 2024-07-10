import { Request, Response } from "express";
import { RegisterClientDto, AuthRepository, CustomError  } from "../../../domain";
import { ClientsEntity } from "../../../data";
import { BcryptAdapter, JwtAdapter } from "../../../config";
export class AuthClientsController {
    
    constructor(
        private readonly authRepository: AuthRepository
    ){}

    private handleError = ( error: unknown, res: Response ) => {
    
         if ( error instanceof CustomError ) {
           return res.status(error.statusCode).json({ error: error.message });
         }
    
         return res.status(500).json({ error: 'Internal Server Error' });
       }

    registerClient = async (req: Request, res: Response) => {
       const [error, registerClientDto] = RegisterClientDto.create(req.body);
       if ( error ) return res.status(400).json({ error });
       
       try {
        const client: ClientsEntity = await this.authRepository.register(registerClientDto!)
        res.json(client)
       } catch (error) {
        this.handleError(error, res);
       }
    }

    loginClient = async (req: Request, res: Response) => {
        const {email, password} = req.body;
        if (!email ||!password) {
            return res.status(400).json({ error: 'Email and password are required'})
        }

        try {
            const { token, message } = await this.authRepository.login(email, password)
            res.json({ token, message })
        } catch (error) {
            this.handleError(error, res)
        }
    }
}