import { Request, Response } from "express";
import { RegisterClientDto, AuthRepository, UpdateClientDto,  } from "../../../domain";

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
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: ' Email and password are required'})
        }

        this.authRepository.login(email, password)
        .then(client => {
            if (!client) {
                return res.status(401).json({ error: 'Ivalid credentials'})
            }
            res.json(client)
        })
        .catch(error => res.status(500).json({ error: error.message }))
    }

    getClientById = (req: Request, res: Response) => {
        const {id} = req.params;
        this.authRepository.getClientById(id)
        .then(client => {
            if (!client) {
                return res.status(404).json({ error: 'User not found'})
            }
            res.json(client);
        })
        .catch(error => res.status(500).json({ error: error.message }));
    }

    updateClient = (req: Request, res: Response) => {
        const {id} = req.params;
        const [error, updateClientDto] = UpdateClientDto.update(req.body);
        if (error) return res.status(400).json({ error })

        this.authRepository.updateClient(id, updateClientDto!)
        .then(client => {
            if (!client) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(client)
        })
        .catch(error => res.status(500).json({error: error.message}))
    }
}