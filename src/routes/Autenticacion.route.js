import express from 'express';
import {ValidarUser} from '../controllers/AutenticacionController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/login', ValidarUser);
router.post('/', ValidarToken); //se usa para validar el token generado en http://localhost:4000/login, en headers-> token, no se usa como endpoint


export default router;
