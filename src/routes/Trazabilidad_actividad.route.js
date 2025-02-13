import express from 'express';
import { ListarTrazActividad, RegistrarTrazActividad } from '../controllers/Trazabilidad_actividadController.js';
import {ActualizarTrazActividad} from '../controllers/Trazabilidad_actividadController.js';
import { BuscarTrazActividad } from '../controllers/Trazabilidad_actividadController.js';
import { EliminarTrazActividad } from '../controllers/Trazabilidad_actividadController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TrazActividad/',ValidarToken, ListarTrazActividad);
router.get('/TrazActividad/:id',ValidarToken, BuscarTrazActividad);
router.put('/TrazActividad/:id',ValidarToken, ActualizarTrazActividad)
router.post('/TrazActividad',ValidarToken, RegistrarTrazActividad)
router.delete('/TrazActividad/:id',ValidarToken, EliminarTrazActividad);


export default router;


