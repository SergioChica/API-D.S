import { Request, Response } from 'express';

// Creamos un array para almacenar los datos (simulando una base de datos)
let data: { id: number, name: string }[] = [
  {id:1234, name: 'Sergio'},
  {id:2914, name: 'Espitia'},
];

// Controlador para obtener todos los datos
export const getData = (req: Request, res: Response) => {
  res.json(data);
};

// Controlador para agregar datos
export const postLogin = (req: Request, res: Response) => {
  const { name, code } = req.body;

  const user = data.find(user => code == user.id && name == user.name)

  if (user) {
    res.json({ message: 'Your login was successful.' });
  }else {
    res.status(401).json({ error: 'Incorrect name and code.'})
  }
  
};