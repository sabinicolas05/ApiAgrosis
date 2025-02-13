import express from 'express';
import { ListarFinanzasResiduo, RegistrarFinanzasResiduo } from '../controllers/Finanzas_residuoController.js';
import {ActualizarFinanzasResiduo} from '../controllers/Finanzas_residuoController.js';
import { BuscarFinanzasResiduo } from '../controllers/Finanzas_residuoController.js';
import { EliminarFinanzasResiduo } from '../controllers/Finanzas_residuoController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/FinanzasResiduo',ValidarToken ,ListarFinanzasResiduo);
router.get('/FinanzasResiduo/:id',ValidarToken, BuscarFinanzasResiduo);
router.put('/FinanzasResiduo/:id',ValidarToken, ActualizarFinanzasResiduo)
router.post('/FinanzasResiduo',ValidarToken, RegistrarFinanzasResiduo)
router.delete('/FinanzasResiduo/:id',ValidarToken, EliminarFinanzasResiduo);


export default router;
