import express from 'express';
import { ListarTrazNotificacion, RegistrarTrazNotificacion } from '../controllers/Trazabilidad_notificacionController.js';
import {ActualizarTrazNotificacion} from '../controllers/Trazabilidad_notificacionController.js';
import { BuscarTrazNotificacion } from '../controllers/Trazabilidad_notificacionController.js';
import { EliminarTrazNotificacion } from '../controllers/Trazabilidad_notificacionController.js';

const router = express.Router();
router.get('/TrazNotificacion', ListarTrazNotificacion);
router.get('/TrazNotificacion/:id', BuscarTrazNotificacion);
router.put('/TrazNotificacion/:id', ActualizarTrazNotificacion)
router.post('/TrazNotificacion', RegistrarTrazNotificacion)
router.delete('/TrazNotificacion/:id', EliminarTrazNotificacion);


export default router;
