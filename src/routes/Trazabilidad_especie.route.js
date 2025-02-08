import express from 'express';
import { ListarTrazEspecie, RegistrarTrazEspecie } from '../controllers/Trazabilidad_especieController.js';
import {ActualizarTrazEspecie} from '../controllers/Trazabilidad_especieController.js';
import { BuscarTrazEspecie } from '../controllers/Trazabilidad_especieController.js';
import { EliminarTrazEspecie } from '../controllers/Trazabilidad_especieController.js';

const router = express.Router();
router.get('/TrazEspecie', ListarTrazEspecie);
router.get('/TrazEspecie/:id', BuscarTrazEspecie);
router.put('/TrazEspecie/:id', ActualizarTrazEspecie)
router.post('/TrazEspecie', RegistrarTrazEspecie)
router.delete('/TrazEspecie/:id', EliminarTrazEspecie);


export default router;
