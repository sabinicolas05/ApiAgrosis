import express from 'express';
import { ListarSensorConfig, RegistrarSensorConfig } from '../controllers/IoT_ConfiguracionController.js';
import {ActualizarSensorConfig} from '../controllers/IoT_ConfiguracionController.js';
import { BuscarSensorConfig } from '../controllers/IoT_ConfiguracionController.js';
import { EliminarSensorConfig } from '../controllers/IoT_ConfiguracionController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/SensorConfig/',ValidarToken, ListarSensorConfig);
router.get('/SensorConfig/:id',ValidarToken, BuscarSensorConfig);
router.put('/SensorConfig/:id',ValidarToken, ActualizarSensorConfig)
router.post('/SensorConfig',ValidarToken, RegistrarSensorConfig)
router.delete('/SensorConfig/:id',ValidarToken, EliminarSensorConfig);


export default router;
