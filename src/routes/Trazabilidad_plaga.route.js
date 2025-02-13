import express from 'express';
import { ListarTrazPlaga, RegistrarTrazPlaga } from '../controllers/Trazabilidad_plagaController.js';
import {ActualizarTrazPlaga} from '../controllers/Trazabilidad_plagaController.js';
import { BuscarTrazPlaga } from '../controllers/Trazabilidad_plagaController.js';
import { EliminarTrazPlaga } from '../controllers/Trazabilidad_plagaController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TrazPlaga',ValidarToken, ListarTrazPlaga);
router.get('/TrazPlaga/:id',ValidarToken, BuscarTrazPlaga);
router.put('/TrazPlaga/:id',ValidarToken, ActualizarTrazPlaga)
router.post('/TrazPlaga',ValidarToken, RegistrarTrazPlaga)
router.delete('/TrazPlaga/:id',ValidarToken, EliminarTrazPlaga);


export default router;
