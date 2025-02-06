
import express from 'express';
import { ListarFinanzasProduccion, RegistrarFinanzasProduccion } from '../controllers/Finanzas_produccionController.js';
import {ActualizarFinanzasProduccion} from '../controllers/Finanzas_produccionController.js';
import { BuscarFinanzasProduccion } from '../controllers/Finanzas_produccionController.js';
import { EliminarFinanzasProduccion } from '../controllers/Finanzas_produccionController.js';

const router = express.Router();
router.get('/FinanzasProduccion', ListarFinanzasProduccion);
router.get('/FinanzasProduccion/:id', BuscarFinanzasProduccion);
router.put('/FinanzasProduccion/:id', ActualizarFinanzasProduccion)
router.post('/FinanzasProduccion', RegistrarFinanzasProduccion)
router.delete('/FinanzasProduccion/:id', EliminarFinanzasProduccion);


export default router;
