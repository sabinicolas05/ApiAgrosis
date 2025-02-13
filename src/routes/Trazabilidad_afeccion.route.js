import express from 'express';
import { ListarTrazAfeccion, RegistrarTrazAfeccion } from '../controllers/Trazabilidad_afeccionController.js';
import {ActualizarTrazAfeccion} from '../controllers/Trazabilidad_afeccionController.js';
import { BuscarTrazAfeccion } from '../controllers/Trazabilidad_afeccionController.js';
import { EliminarTrazAfeccion } from '../controllers/Trazabilidad_afeccionController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TrazAfeccion/',ValidarToken, ListarTrazAfeccion);
router.get('/TrazAfeccion/:id',ValidarToken, BuscarTrazAfeccion);
router.put('/TrazAfeccion/:id',ValidarToken, ActualizarTrazAfeccion)
router.post('/TrazAfeccion',ValidarToken, RegistrarTrazAfeccion)
router.delete('/TrazAfeccion/:id',ValidarToken, EliminarTrazAfeccion);


export default router;
