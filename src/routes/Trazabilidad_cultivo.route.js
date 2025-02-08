import express from 'express';
import { ListarTrazCultivo, RegistrarTrazCultivo } from '../controllers/Trazabilidad_cultivoController.js';
import {ActualizarTrazCultivo} from '../controllers/Trazabilidad_cultivoController.js';
import { BuscarTrazCultivo } from '../controllers/Trazabilidad_cultivoController.js';
import { EliminarTrazCultivo } from '../controllers/Trazabilidad_cultivoController.js';

const router = express.Router();
router.get('/TrazCultivo', ListarTrazCultivo);
router.get('/TrazCultivo/:id', BuscarTrazCultivo);
router.put('/TrazCultivo/:id', ActualizarTrazCultivo)
router.post('/TrazCultivo', RegistrarTrazCultivo)
router.delete('/TrazCultivo/:id', EliminarTrazCultivo);


export default router;
