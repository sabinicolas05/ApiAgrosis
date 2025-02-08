import express from 'express';
import { ListarTrazTipoResiduo, RegistrarTrazTipoResiduo } from '../controllers/Trazabilidad_tipo_residuoController.js';
import {ActualizarTrazTipoResiduo} from '../controllers/Trazabilidad_tipo_residuoController.js';
import { BuscarTrazTipoResiduo } from '../controllers/Trazabilidad_tipo_residuoController.js';
import { EliminarTrazTipoResiduo } from '../controllers/Trazabilidad_tipo_residuoController.js';

const router = express.Router();
router.get('/TrazTipoResiduo', ListarTrazTipoResiduo);
router.get('/TrazTipoResiduo/:id', BuscarTrazTipoResiduo);
router.put('/TrazTipoResiduo/:id', ActualizarTrazTipoResiduo)
router.post('/TrazTipoResiduo', RegistrarTrazTipoResiduo)
router.delete('/TrazTipoResiduo/:id', EliminarTrazTipoResiduo);


export default router;
