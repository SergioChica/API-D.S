import { Request, Response } from "express";
import { RegisterEmployeesDto, AuthEmployeesRepository, CustomError  } from "../../../domain";
import { EmployeesEntity } from "../../../data";
export class AuthClientsController {
    
    constructor(
        private readonly authEmployeesRepository: AuthEmployeesRepository
    ){}

    private handleError = ( error: unknown, res: Response ) => {
    
         if ( error instanceof CustomError ) {
           return res.status(error.statusCode).json({ error: error.message });
         }
    
         return res.status(500).json({ error: 'Internal Server Error' });
       }

    registerEmployees = async (req: Request, res: Response) => {
       const [error, registerEmployeesDto] = RegisterEmployeesDto.create(req.body);
       if ( error ) return res.status(400).json({ error });
       
       try {
        const employees: EmployeesEntity = await this.authEmployeesRepository.register(registerEmployeesDto!)
        res.json(employees)
       } catch (error) {
        this.handleError(error, res);
       }
    }

    loginEmployees = async (req: Request, res: Response) => {
        const {email, password} = req.body;
        if (!email ||!password) {
            return res.status(400).json({ error: 'Email and password are required'})
        }

        try {
            const { token, message } = await this.authEmployeesRepository.login(email, password)
            res.json({ token, message })
        } catch (error) {
            this.handleError(error, res)
        }
    }
}