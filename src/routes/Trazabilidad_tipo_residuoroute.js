import express from 'express';
import { ListarTrazTipoResiduo, RegistrarTrazTipoResiduo } from '../controllers/Trazabilidad_tipo_residuoController.js';
import {ActualizarTrazTipoResiduo} from '../controllers/Trazabilidad_tipo_residuoController.js';
import { BuscarTrazTipoResiduo } from '../controllers/Trazabilidad_tipo_residuoController.js';
import { EliminarTrazTipoResiduo } from '../controllers/Trazabilidad_tipo_residuoController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TrazTipoResiduo',ValidarToken, ListarTrazTipoResiduo);
router.get('/TrazTipoResiduo/:id',ValidarToken, BuscarTrazTipoResiduo);
router.put('/TrazTipoResiduo/:id',ValidarToken, ActualizarTrazTipoResiduo)
router.post('/TrazTipoResiduo',ValidarToken, RegistrarTrazTipoResiduo)
router.delete('/TrazTipoResiduo/:id',ValidarToken, EliminarTrazTipoResiduo);


export default router;
