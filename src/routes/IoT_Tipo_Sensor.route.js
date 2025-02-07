import express from 'express';
import { ListarTipoSensor, RegistrarTipoSensor } from '../controllers/IoT_Tipo_SensorController.js';
import {ActualizarTipoSensor} from '../controllers/IoT_Tipo_SensorController.js';
import { BuscarTipoSensor } from '../controllers/IoT_Tipo_SensorController.js';
import { EliminarTipoSensor } from '../controllers/IoT_Tipo_SensorController.js';

const router = express.Router();
router.get('/TipoSensor/', ListarTipoSensor);
router.get('/TipoSensor/:id', BuscarTipoSensor);
router.put('/TipoSensor/:id', ActualizarTipoSensor)
router.post('/TipoSensor', RegistrarTipoSensor)
router.delete('/TipoSensor/:id', EliminarTipoSensor);


export default router;
