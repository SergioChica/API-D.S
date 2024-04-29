import { Request, Response } from 'express';

// Creamos un array para almacenar los datos (simulando una base de datos)
let data: { id: number, name: string }[] = [];

// Controlador para obtener todos los datos
export const getData = (req: Request, res: Response) => {
  res.json(data);
};

// Controlador para agregar datos
export const addData = (req: Request, res: Response) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ error: 'Se requieren los campos "id" y "name".' });
  }
  data.push({ id, name });// Entregamos los datos al arreglo
  res.status(201).json({ message: 'Datos agregados correctamente.' });// Generamos una respuesta
};