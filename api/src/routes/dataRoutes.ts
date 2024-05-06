import express from 'express';
import { getData, postLogin } from '../controllers/dataControllers';

// Creamos la instancia para manejar rutas que seran almacenada en router
const router = express.Router();

// Ruta para obtener todos los datos
router.get('/data', getData);

// Ruta para agregar datos
router.post('/login', postLogin);

export default router;