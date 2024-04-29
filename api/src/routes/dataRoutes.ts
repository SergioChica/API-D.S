import express from 'express';
import { getData, addData } from '../controllers/dataControllers';

// Creamos la instancia para manejar rutas que seran almacenada en router
const router = express.Router();

// Ruta para obtener todos los datos
router.get('/', getData);

// Ruta para agregar datos
router.post('/', addData);

export default router;