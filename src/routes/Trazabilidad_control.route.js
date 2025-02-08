import express from 'express';
import { ListarTrazControl, RegistrarTrazControl } from '../controllers/Trazabilidad_controlController.js';
import {ActualizarTrazControl} from '../controllers/Trazabilidad_controlController.js';
import { BuscarTrazControl } from '../controllers/Trazabilidad_controlController.js';
import { EliminarTrazControl } from '../controllers/Trazabilidad_controlController.js';

const router = express.Router();
router.get('/TrazControl', ListarTrazControl);
router.get('/TrazControl/:id', BuscarTrazControl);
router.put('/TrazControl/:id', ActualizarTrazControl)
router.post('/TrazControl', RegistrarTrazControl)
router.delete('/TrazControl/:id', EliminarTrazControl);


export default router;
