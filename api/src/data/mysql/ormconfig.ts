import { DataSource } from "typeorm";
import { ClientsEntity } from "../../domain";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true, // Desactiva en producción
    logging: false,
    entities: [ClientsEntity], // Agrega todas tus entidades aquí
    migrations: [],
    subscribers: [],
})


AppDataSource.initialize()
    .then(() => {
        console.log("Database MySql connected");
    })
    .catch((error) => {
        console.log("Database MySql connection error");
        throw error;
    });