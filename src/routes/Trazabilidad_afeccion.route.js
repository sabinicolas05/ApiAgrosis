import express from 'express';
import { ListarTrazAfeccion, RegistrarTrazAfeccion } from '../controllers/Trazabilidad_afeccionController.js';
import {ActualizarTrazAfeccion} from '../controllers/Trazabilidad_afeccionController.js';
import { BuscarTrazAfeccion } from '../controllers/Trazabilidad_afeccionController.js';
import { EliminarTrazAfeccion } from '../controllers/Trazabilidad_afeccionController.js';

const router = express.Router();
router.get('/TrazAfeccion/', ListarTrazAfeccion);
router.get('/TrazAfeccion/:id', BuscarTrazAfeccion);
router.put('/TrazAfeccion/:id', ActualizarTrazAfeccion)
router.post('/TrazAfeccion', RegistrarTrazAfeccion)
router.delete('/TrazAfeccion/:id', EliminarTrazAfeccion);


export default router;
