import express from 'express';
import { ListarTrazBancal, RegistrarTrazBancal } from '../controllers/Trazabilidad_bancalController.js';
import {ActualizarTrazBancal} from '../controllers/Trazabilidad_bancalController.js';
import { BuscarTrazBancal } from '../controllers/Trazabilidad_bancalController.js';
import { EliminarTrazBancal } from '../controllers/Trazabilidad_bancalController.js';

const router = express.Router();
router.get('/TrazBancal', ListarTrazBancal);
router.get('/TrazBancal/:id', BuscarTrazBancal);
router.put('/TrazBancal/:id', ActualizarTrazBancal)
router.post('/TrazBancal', RegistrarTrazBancal)
router.delete('/TrazBancal/:id', EliminarTrazBancal);


export default router;
