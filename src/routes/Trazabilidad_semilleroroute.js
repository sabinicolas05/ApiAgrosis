import express from 'express';
import { ListarTrazSemillero, RegistrarTrazSemillero } from '../controllers/Trazabilidad_semilleroController.js';
import {ActualizarTrazSemillero} from '../controllers/Trazabilidad_semilleroController.js';
import { BuscarTrazSemillero } from '../controllers/Trazabilidad_semilleroController.js';
import { EliminarTrazSemillero } from '../controllers/Trazabilidad_semilleroController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TrazSemillero',ValidarToken, ListarTrazSemillero);
router.get('/TrazSemillero/:id',ValidarToken, BuscarTrazSemillero);
router.put('/TrazSemillero/:id',ValidarToken, ActualizarTrazSemillero)
router.post('/TrazSemillero',ValidarToken, RegistrarTrazSemillero)
router.delete('/TrazSemillero/:id',ValidarToken, EliminarTrazSemillero);


export default router;
