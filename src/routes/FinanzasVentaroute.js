import express from 'express';
import { ListarFinanzasVenta, RegistrarFinanzasVenta } from '../controllers/Finanzas_ventaController.js';
import {ActualizarFinanzasVenta} from '../controllers/Finanzas_ventaController.js';
import { BuscarFinanzasVenta } from '../controllers/Finanzas_ventaController.js';
import { EliminarFinanzasVenta } from '../controllers/Finanzas_ventaController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/FinanzasVenta', ValidarToken,ListarFinanzasVenta);
router.get('/FinanzasVenta/:id', ValidarToken,BuscarFinanzasVenta);
router.put('/FinanzasVenta/:id',ValidarToken, ActualizarFinanzasVenta)
router.post('/FinanzasVenta',ValidarToken, RegistrarFinanzasVenta)
router.delete('/FinanzasVenta/:id',ValidarToken, EliminarFinanzasVenta);


export default router;
