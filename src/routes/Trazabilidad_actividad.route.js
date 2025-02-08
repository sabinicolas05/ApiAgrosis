import express from 'express';
import { ListarTrazActividad, RegistrarTrazActividad } from '../controllers/Trazabilidad_actividadController.js';
import {ActualizarTrazActividad} from '../controllers/Trazabilidad_actividadController.js';
import { BuscarTrazActividad } from '../controllers/Trazabilidad_actividadController.js';
import { EliminarTrazActividad } from '../controllers/Trazabilidad_actividadController.js';

const router = express.Router();
router.get('/TrazActividad/', ListarTrazActividad);
router.get('/TrazActividad/:id', BuscarTrazActividad);
router.put('/TrazActividad/:id', ActualizarTrazActividad)
router.post('/TrazActividad', RegistrarTrazActividad)
router.delete('/TrazActividad/:id', EliminarTrazActividad);


export default router;


