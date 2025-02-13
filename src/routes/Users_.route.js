import express from 'express';
import { ListarUser, RegistrarUser } from '../controllers/Users_Controller.js';
import {ActualizarUser} from '../controllers/Users_Controller.js';
import { BuscarUser } from '../controllers/Users_Controller.js';
import { EliminarUser } from '../controllers/Users_Controller.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/User',ValidarToken, ListarUser);
router.get('/User/:id',ValidarToken, BuscarUser);
router.put('/User/:id',ValidarToken, ActualizarUser)
router.post('/User',ValidarToken, RegistrarUser)
router.delete('/User/:id',ValidarToken, EliminarUser);


export default router;
