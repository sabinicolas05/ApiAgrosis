import express from 'express';
import { ListarTrazPlaga, RegistrarTrazPlaga } from '../controllers/Trazabilidad_plagaController.js';
import {ActualizarTrazPlaga} from '../controllers/Trazabilidad_plagaController.js';
import { BuscarTrazPlaga } from '../controllers/Trazabilidad_plagaController.js';
import { EliminarTrazPlaga } from '../controllers/Trazabilidad_plagaController.js';

const router = express.Router();
router.get('/TrazPlaga', ListarTrazPlaga);
router.get('/TrazPlaga/:id', BuscarTrazPlaga);
router.put('/TrazPlaga/:id', ActualizarTrazPlaga)
router.post('/TrazPlaga', RegistrarTrazPlaga)
router.delete('/TrazPlaga/:id', EliminarTrazPlaga);


export default router;
