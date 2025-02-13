import express from 'express';
import { ListarTrazControl, RegistrarTrazControl } from '../controllers/Trazabilidad_controlController.js';
import {ActualizarTrazControl} from '../controllers/Trazabilidad_controlController.js';
import { BuscarTrazControl } from '../controllers/Trazabilidad_controlController.js';
import { EliminarTrazControl } from '../controllers/Trazabilidad_controlController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TrazControl',ValidarToken, ListarTrazControl);
router.get('/TrazControl/:id',ValidarToken, BuscarTrazControl);
router.put('/TrazControl/:id',ValidarToken, ActualizarTrazControl)
router.post('/TrazControl',ValidarToken, RegistrarTrazControl)
router.delete('/TrazControl/:id',ValidarToken, EliminarTrazControl);


export default router;
