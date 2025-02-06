
import express from 'express';
import { ListarFinanzasPago, RegistrarFinanzasPago } from '../controllers/Finanzas_pagoController.js';
import {ActualizarFinanzasPago} from '../controllers/Finanzas_pagoController.js';
import { BuscarFinanzasPago } from '../controllers/Finanzas_pagoController.js';
import { EliminarFinanzasPago } from '../controllers/Finanzas_pagoController.js';

const router = express.Router();
router.get('/FinanzasPago', ListarFinanzasPago);
router.get('/FinanzasPago/:id', BuscarFinanzasPago);
router.put('/FinanzasPago/:id', ActualizarFinanzasPago)
router.post('/FinanzasPago', RegistrarFinanzasPago)
router.delete('/FinanzasPago/:id', EliminarFinanzasPago);


export default router;
