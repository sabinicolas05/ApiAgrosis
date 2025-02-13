import express from 'express';
import { ListarTrazTipoPlaga, RegistrarTrazTipoPlaga } from '../controllers/Trazabilidad_tipo_plagaController.js';
import {ActualizarTrazTipoPlaga} from '../controllers/Trazabilidad_tipo_plagaController.js';
import { BuscarTrazTipoPlaga } from '../controllers/Trazabilidad_tipo_plagaController.js';
import { EliminarTrazTipoPlaga } from '../controllers/Trazabilidad_tipo_plagaController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TrazTipoPlaga',ValidarToken, ListarTrazTipoPlaga);
router.get('/TrazTipoPlaga/:id',ValidarToken, BuscarTrazTipoPlaga);
router.put('/TrazTipoPlaga/:id',ValidarToken, ActualizarTrazTipoPlaga)
router.post('/TrazTipoPlaga',ValidarToken, RegistrarTrazTipoPlaga)
router.delete('/TrazTipoPlaga/:id',ValidarToken, EliminarTrazTipoPlaga);


export default router;
