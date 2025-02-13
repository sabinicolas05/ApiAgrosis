import jwt from 'jsonwebtoken';
import { client } from '../database/conexion.js'; 

export const ValidarUser = async (req, resp) => {
  try {
    const { login, password } = req.body;
    const sql = `SELECT first_name, last_name, identificacion FROM "Users_usuario" WHERE username = $1 AND password = $2`;
    const response = await client.query(sql, [login, password]);

    if (response.rows.length > 0) {
      const token = jwt.sign({ user: response.rows }, process.env.SECRET, {
        expiresIn: process.env.TIME,
      });

      return resp.status(200).json({ message: 'Usuario autorizado', result: response.rows, token });
    } else {
      return resp.status(404).json({ message: 'Usuario no autorizado' });
    }
  } catch (error) {
    console.error('Error al validar usuario:', error.stack);
    return resp.status(500).json({ message: 'Error en la validacion de usuario' });
  }
};

export const ValidarToken = (req, resp, next) => {
    const token_usuario = req.headers['token'];
    console.log('Token recibido:', token_usuario);
  
    if (!token_usuario) {
      return resp.status(403).json({ message: 'El token es requerido' });
    }
  
    jwt.verify(token_usuario, process.env.SECRET, (error, decoded) => {
      if (error) {
        console.error('Error en la verificación del token:', error.stack);
        return resp.status(403).json({ message: 'El token no está autorizado' });
      } else {
        console.log('Token válido:', decoded);
  
         next();
      }
    });
  };
  