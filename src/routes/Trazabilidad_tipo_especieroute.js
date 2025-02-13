import express from 'express';
import { ListarTrazTipoEspecie, RegistrarTrazTipoEspecie } from '../controllers/Trazabilidad_tipo_especieController.js';
import {ActualizarTrazTipoEspecie} from '../controllers/Trazabilidad_tipo_especieController.js';
import { BuscarTrazTipoEspecie } from '../controllers/Trazabilidad_tipo_especieController.js';
import { EliminarTrazTipoEspecie } from '../controllers/Trazabilidad_tipo_especieController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TrazTipoEspecie',ValidarToken, ListarTrazTipoEspecie);
router.get('/TrazTipoEspecie/:id',ValidarToken, BuscarTrazTipoEspecie);
router.put('/TrazTipoEspecie/:id',ValidarToken, ActualizarTrazTipoEspecie)
router.post('/TrazTipoEspecie',ValidarToken, RegistrarTrazTipoEspecie)
router.delete('/TrazTipoEspecie/:id',ValidarToken, EliminarTrazTipoEspecie);


export default router;
