import express from 'express';
import { ListarTrazLote, RegistrarTrazLote } from '../controllers/Trazabilidad_loteController.js';
import {ActualizarTrazLote} from '../controllers/Trazabilidad_loteController.js';
import { BuscarTrazLote } from '../controllers/Trazabilidad_loteController.js';
import { EliminarTrazLote } from '../controllers/Trazabilidad_loteController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TrazLote',ValidarToken, ListarTrazLote);
router.get('/TrazLote/:id',ValidarToken, BuscarTrazLote);
router.put('/TrazLote/:id',ValidarToken, ActualizarTrazLote)
router.post('/TrazLote',ValidarToken, RegistrarTrazLote)
router.delete('/TrazLote/:id',ValidarToken, EliminarTrazLote);


export default router;
