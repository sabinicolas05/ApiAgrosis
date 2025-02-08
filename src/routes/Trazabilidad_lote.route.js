import express from 'express';
import { ListarTrazLote, RegistrarTrazLote } from '../controllers/Trazabilidad_loteController.js';
import {ActualizarTrazLote} from '../controllers/Trazabilidad_loteController.js';
import { BuscarTrazLote } from '../controllers/Trazabilidad_loteController.js';
import { EliminarTrazLote } from '../controllers/Trazabilidad_loteController.js';

const router = express.Router();
router.get('/TrazLote', ListarTrazLote);
router.get('/TrazLote/:id', BuscarTrazLote);
router.put('/TrazLote/:id', ActualizarTrazLote)
router.post('/TrazLote', RegistrarTrazLote)
router.delete('/TrazLote/:id', EliminarTrazLote);


export default router;
