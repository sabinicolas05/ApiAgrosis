import express from 'express';
import { ListarTrazNotificacion, RegistrarTrazNotificacion } from '../controllers/Trazabilidad_notificacionController.js';
import {ActualizarTrazNotificacion} from '../controllers/Trazabilidad_notificacionController.js';
import { BuscarTrazNotificacion } from '../controllers/Trazabilidad_notificacionController.js';
import { EliminarTrazNotificacion } from '../controllers/Trazabilidad_notificacionController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TrazNotificacion',ValidarToken, ListarTrazNotificacion);
router.get('/TrazNotificacion/:id',ValidarToken, BuscarTrazNotificacion);
router.put('/TrazNotificacion/:id',ValidarToken, ActualizarTrazNotificacion)
router.post('/TrazNotificacion',ValidarToken, RegistrarTrazNotificacion)
router.delete('/TrazNotificacion/:id',ValidarToken, EliminarTrazNotificacion);


export default router;
