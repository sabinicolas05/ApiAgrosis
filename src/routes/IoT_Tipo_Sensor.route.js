import express from 'express';
import { ListarTipoSensor, RegistrarTipoSensor } from '../controllers/IoT_Tipo_SensorController.js';
import {ActualizarTipoSensor} from '../controllers/IoT_Tipo_SensorController.js';
import { BuscarTipoSensor } from '../controllers/IoT_Tipo_SensorController.js';
import { EliminarTipoSensor } from '../controllers/IoT_Tipo_SensorController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TipoSensor/',ValidarToken, ListarTipoSensor);
router.get('/TipoSensor/:id',ValidarToken, BuscarTipoSensor);
router.put('/TipoSensor/:id',ValidarToken, ActualizarTipoSensor)
router.post('/TipoSensor',ValidarToken, RegistrarTipoSensor)
router.delete('/TipoSensor/:id',ValidarToken, EliminarTipoSensor);


export default router;
