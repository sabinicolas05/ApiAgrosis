import express from 'express';
import { ListarTrazTipoEspecie, RegistrarTrazTipoEspecie } from '../controllers/Trazabilidad_tipo_especieController.js';
import {ActualizarTrazTipoEspecie} from '../controllers/Trazabilidad_tipo_especieController.js';
import { BuscarTrazTipoEspecie } from '../controllers/Trazabilidad_tipo_especieController.js';
import { EliminarTrazTipoEspecie } from '../controllers/Trazabilidad_tipo_especieController.js';

const router = express.Router();
router.get('/TrazTipoEspecie', ListarTrazTipoEspecie);
router.get('/TrazTipoEspecie/:id', BuscarTrazTipoEspecie);
router.put('/TrazTipoEspecie/:id', ActualizarTrazTipoEspecie)
router.post('/TrazTipoEspecie', RegistrarTrazTipoEspecie)
router.delete('/TrazTipoEspecie/:id', EliminarTrazTipoEspecie);


export default router;
