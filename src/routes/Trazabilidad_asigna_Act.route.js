import express from 'express';
import { ListarTrazAsigna, RegistrarTrazAsigna } from '../controllers/Trazabilidad_asigna_actividadController.js';
import {ActualizarTrazAsigna} from '../controllers/Trazabilidad_asigna_actividadController.js';
import { BuscarTrazAsigna } from '../controllers/Trazabilidad_asigna_actividadController.js';
import { EliminarTrazAsigna } from '../controllers/Trazabilidad_asigna_actividadController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TrazAsigna', ValidarToken,ListarTrazAsigna);
router.get('/TrazAsigna/:id',ValidarToken, BuscarTrazAsigna);
router.put('/TrazAsigna/:id',ValidarToken, ActualizarTrazAsigna)
router.post('/TrazAsigna',ValidarToken, RegistrarTrazAsigna)
router.delete('/TrazAsigna/:id',ValidarToken, EliminarTrazAsigna);


export default router;
