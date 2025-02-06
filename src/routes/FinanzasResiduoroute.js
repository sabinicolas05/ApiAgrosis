import express from 'express';
import { ListarFinanzasResiduo, RegistrarFinanzasResiduo } from '../controllers/Finanzas_residuoController.js';
import {ActualizarFinanzasResiduo} from '../controllers/Finanzas_residuoController.js';
import { BuscarFinanzasResiduo } from '../controllers/Finanzas_residuoController.js';
import { EliminarFinanzasResiduo } from '../controllers/Finanzas_residuoController.js';

const router = express.Router();
router.get('/FinanzasResiduo', ListarFinanzasResiduo);
router.get('/FinanzasResiduo/:id', BuscarFinanzasResiduo);
router.put('/FinanzasResiduo/:id', ActualizarFinanzasResiduo)
router.post('/FinanzasResiduo', RegistrarFinanzasResiduo)
router.delete('/FinanzasResiduo/:id', EliminarFinanzasResiduo);


export default router;
