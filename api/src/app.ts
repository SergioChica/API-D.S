import express from 'express';
import cors from 'cors';
import dataRoutes from './routes/dataRoutes';

// Creamos la instancia de express dentro de app
const app = express();

// Creamos un puerto 
const PORT = 3000;

// Middleware para manejar solicitudes JSON
app.use(express.json());
// Middleware para manejar diferentes dominios
app.use(cors());
// Midleware para definir las rutas
app.use('/api', dataRoutes);

// Creamos un eschuchador en este caso para el puerto ya creado
app.listen(PORT, () => {
  console.log(`Servidor activo con el puerto ${PORT}`);
});