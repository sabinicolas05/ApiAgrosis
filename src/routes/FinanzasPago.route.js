import express from 'express';
import { ListarFinanzasPago, RegistrarFinanzasPago } from '../controllers/Finanzas_pagoController.js';
import {ActualizarFinanzasPago} from '../controllers/Finanzas_pagoController.js';
import { BuscarFinanzasPago } from '../controllers/Finanzas_pagoController.js';
import { EliminarFinanzasPago } from '../controllers/Finanzas_pagoController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/FinanzasPago', ValidarToken,ListarFinanzasPago);
router.get('/FinanzasPago/:id', ValidarToken,BuscarFinanzasPago);
router.put('/FinanzasPago/:id', ValidarToken,ActualizarFinanzasPago)
router.post('/FinanzasPago',ValidarToken, RegistrarFinanzasPago)
router.delete('/FinanzasPago/:id',ValidarToken, EliminarFinanzasPago);


export default router;
