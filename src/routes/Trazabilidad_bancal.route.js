import express from 'express';
import { ListarTrazBancal, RegistrarTrazBancal } from '../controllers/Trazabilidad_bancalController.js';
import {ActualizarTrazBancal} from '../controllers/Trazabilidad_bancalController.js';
import { BuscarTrazBancal } from '../controllers/Trazabilidad_bancalController.js';
import { EliminarTrazBancal } from '../controllers/Trazabilidad_bancalController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TrazBancal',ValidarToken, ListarTrazBancal);
router.get('/TrazBancal/:id',ValidarToken, BuscarTrazBancal);
router.put('/TrazBancal/:id',ValidarToken, ActualizarTrazBancal)
router.post('/TrazBancal',ValidarToken, RegistrarTrazBancal)
router.delete('/TrazBancal/:id',ValidarToken, EliminarTrazBancal);


export default router;
