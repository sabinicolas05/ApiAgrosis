import dotenv from 'dotenv';
dotenv.config({ path: './env/.env' }); // Asegúrate de que la ruta sea correcta

import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
  
  client.connect()
    .then(() => console.log("Conexión exitosa a PostgreSQL"))
    .catch((err) => console.error("Error de conexión:", err.stack));
  
  
  export { client };