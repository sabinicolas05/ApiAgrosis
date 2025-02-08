import express from 'express';
import { ListarTrazAsigna, RegistrarTrazAsigna } from '../controllers/Trazabilidad_asigna_actividadController.js';
import {ActualizarTrazAsigna} from '../controllers/Trazabilidad_asigna_actividadController.js';
import { BuscarTrazAsigna } from '../controllers/Trazabilidad_asigna_actividadController.js';
import { EliminarTrazAsigna } from '../controllers/Trazabilidad_asigna_actividadController.js';

const router = express.Router();
router.get('/TrazAsigna', ListarTrazAsigna);
router.get('/TrazAsigna/:id', BuscarTrazAsigna);
router.put('/TrazAsigna/:id', ActualizarTrazAsigna)
router.post('/TrazAsigna', RegistrarTrazAsigna)
router.delete('/TrazAsigna/:id', EliminarTrazAsigna);


export default router;
