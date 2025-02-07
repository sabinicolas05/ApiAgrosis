import express from 'express';
import { ListarSensor, RegistrarSensor } from '../controllers/IoT_SensorController.js';
import {ActualizarSensor} from '../controllers/IoT_SensorController.js';
import { BuscarSensor } from '../controllers/IoT_SensorController.js';
import { EliminarSensor } from '../controllers/IoT_SensorController.js';

const router = express.Router();
router.get('/Sensor/', ListarSensor);
router.get('/Sensor/:id', BuscarSensor);
router.put('/Sensor/:id', ActualizarSensor)
router.post('/Sensor', RegistrarSensor)
router.delete('/Sensor/:id', EliminarSensor);


export default router;
