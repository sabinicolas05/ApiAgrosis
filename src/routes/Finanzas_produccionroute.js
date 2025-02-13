import express from 'express';
import { ListarFinanzasProduccion, RegistrarFinanzasProduccion } from '../controllers/Finanzas_produccionController.js';
import {ActualizarFinanzasProduccion} from '../controllers/Finanzas_produccionController.js';
import { BuscarFinanzasProduccion } from '../controllers/Finanzas_produccionController.js';
import { EliminarFinanzasProduccion } from '../controllers/Finanzas_produccionController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/FinanzasProduccion',ValidarToken, ListarFinanzasProduccion);
router.get('/FinanzasProduccion/:id',ValidarToken, BuscarFinanzasProduccion);
router.put('/FinanzasProduccion/:id',ValidarToken, ActualizarFinanzasProduccion)
router.post('/FinanzasProduccion',ValidarToken, RegistrarFinanzasProduccion)
router.delete('/FinanzasProduccion/:id',ValidarToken, EliminarFinanzasProduccion);


export default router;
