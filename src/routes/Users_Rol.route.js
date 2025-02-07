import express from 'express';
import { ListarUserRol, RegistrarUserRol } from '../controllers/Users_RolController.js';
import {ActualizarUserRol} from '../controllers/Users_RolController.js';
import { BuscarUserRol } from '../controllers/Users_RolController.js';
import { EliminarUserRol } from '../controllers/Users_RolController.js';

const router = express.Router();
router.get('/UserRol', ListarUserRol);
router.get('/UserRol/:id', BuscarUserRol);
router.put('/UserRol/:id', ActualizarUserRol)
router.post('/UserRol', RegistrarUserRol)
router.delete('/UserRol/:id', EliminarUserRol);


export default router;
