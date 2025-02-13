import express from 'express';
import { ListarUserRol, RegistrarUserRol } from '../controllers/Users_RolController.js';
import {ActualizarUserRol} from '../controllers/Users_RolController.js';
import { BuscarUserRol } from '../controllers/Users_RolController.js';
import { EliminarUserRol } from '../controllers/Users_RolController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/UserRol',ValidarToken, ListarUserRol);
router.get('/UserRol/:id',ValidarToken, BuscarUserRol);
router.put('/UserRol/:id',ValidarToken, ActualizarUserRol)
router.post('/UserRol',ValidarToken, RegistrarUserRol)
router.delete('/UserRol/:id',ValidarToken, EliminarUserRol);


export default router;
