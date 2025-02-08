import express from 'express';
import { ListarTrazSemillero, RegistrarTrazSemillero } from '../controllers/Trazabilidad_semilleroController.js';
import {ActualizarTrazSemillero} from '../controllers/Trazabilidad_semilleroController.js';
import { BuscarTrazSemillero } from '../controllers/Trazabilidad_semilleroController.js';
import { EliminarTrazSemillero } from '../controllers/Trazabilidad_semilleroController.js';

const router = express.Router();
router.get('/TrazSemillero', ListarTrazSemillero);
router.get('/TrazSemillero/:id', BuscarTrazSemillero);
router.put('/TrazSemillero/:id', ActualizarTrazSemillero)
router.post('/TrazSemillero', RegistrarTrazSemillero)
router.delete('/TrazSemillero/:id', EliminarTrazSemillero);


export default router;
