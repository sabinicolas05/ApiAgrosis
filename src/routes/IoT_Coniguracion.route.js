import express from 'express';
import { ListarSensorConfig, RegistrarSensorConfig } from '../controllers/IoT_ConfiguracionController.js';
import {ActualizarSensorConfig} from '../controllers/IoT_ConfiguracionController.js';
import { BuscarSensorConfig } from '../controllers/IoT_ConfiguracionController.js';
import { EliminarSensorConfig } from '../controllers/IoT_ConfiguracionController.js';

const router = express.Router();
router.get('/SensorConfig/', ListarSensorConfig);
router.get('/SensorConfig/:id', BuscarSensorConfig);
router.put('/SensorConfig/:id', ActualizarSensorConfig)
router.post('/SensorConfig', RegistrarSensorConfig)
router.delete('/SensorConfig/:id', EliminarSensorConfig);


export default router;
