import express from 'express';
import { ListarTrazTipoPlaga, RegistrarTrazTipoPlaga } from '../controllers/Trazabilidad_tipo_plagaController.js';
import {ActualizarTrazTipoPlaga} from '../controllers/Trazabilidad_tipo_plagaController.js';
import { BuscarTrazTipoPlaga } from '../controllers/Trazabilidad_tipo_plagaController.js';
import { EliminarTrazTipoPlaga } from '../controllers/Trazabilidad_tipo_plagaController.js';

const router = express.Router();
router.get('/TrazTipoPlaga', ListarTrazTipoPlaga);
router.get('/TrazTipoPlaga/:id', BuscarTrazTipoPlaga);
router.put('/TrazTipoPlaga/:id', ActualizarTrazTipoPlaga)
router.post('/TrazTipoPlaga', RegistrarTrazTipoPlaga)
router.delete('/TrazTipoPlaga/:id', EliminarTrazTipoPlaga);


export default router;
