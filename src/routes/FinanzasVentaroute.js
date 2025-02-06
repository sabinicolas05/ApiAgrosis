import express from 'express';
import { ListarFinanzasVenta, RegistrarFinanzasVenta } from '../controllers/Finanzas_ventaController.js';
import {ActualizarFinanzasVenta} from '../controllers/Finanzas_ventaController.js';
import { BuscarFinanzasVenta } from '../controllers/Finanzas_ventaController.js';
import { EliminarFinanzasVenta } from '../controllers/Finanzas_ventaController.js';

const router = express.Router();
router.get('/FinanzasVenta', ListarFinanzasVenta);
router.get('/FinanzasVenta/:id', BuscarFinanzasVenta);
router.put('/FinanzasVenta/:id', ActualizarFinanzasVenta)
router.post('/FinanzasVenta', RegistrarFinanzasVenta)
router.delete('/FinanzasVenta/:id', EliminarFinanzasVenta);


export default router;
