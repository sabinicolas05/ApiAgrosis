import express from 'express';
import { ListarTrazCultivo, RegistrarTrazCultivo } from '../controllers/Trazabilidad_cultivoController.js';
import {ActualizarTrazCultivo} from '../controllers/Trazabilidad_cultivoController.js';
import { BuscarTrazCultivo } from '../controllers/Trazabilidad_cultivoController.js';
import { EliminarTrazCultivo } from '../controllers/Trazabilidad_cultivoController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TrazCultivo',ValidarToken, ListarTrazCultivo);
router.get('/TrazCultivo/:id',ValidarToken, BuscarTrazCultivo);
router.put('/TrazCultivo/:id',ValidarToken, ActualizarTrazCultivo)
router.post('/TrazCultivo',ValidarToken, RegistrarTrazCultivo)
router.delete('/TrazCultivo/:id',ValidarToken, EliminarTrazCultivo);


export default router;
