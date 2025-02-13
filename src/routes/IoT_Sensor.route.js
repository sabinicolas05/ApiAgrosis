import express from 'express';
import { ListarSensor, RegistrarSensor } from '../controllers/IoT_SensorController.js';
import {ActualizarSensor} from '../controllers/IoT_SensorController.js';
import { BuscarSensor } from '../controllers/IoT_SensorController.js';
import { EliminarSensor } from '../controllers/IoT_SensorController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/Sensor/',ValidarToken, ListarSensor);
router.get('/Sensor/:id',ValidarToken, BuscarSensor);
router.put('/Sensor/:id',ValidarToken, ActualizarSensor)
router.post('/Sensor',ValidarToken, RegistrarSensor)
router.delete('/Sensor/:id',ValidarToken, EliminarSensor);


export default router;
