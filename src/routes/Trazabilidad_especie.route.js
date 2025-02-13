import express from 'express';
import { ListarTrazEspecie, RegistrarTrazEspecie } from '../controllers/Trazabilidad_especieController.js';
import {ActualizarTrazEspecie} from '../controllers/Trazabilidad_especieController.js';
import { BuscarTrazEspecie } from '../controllers/Trazabilidad_especieController.js';
import { EliminarTrazEspecie } from '../controllers/Trazabilidad_especieController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TrazEspecie', ValidarToken,ListarTrazEspecie);
router.get('/TrazEspecie/:id',ValidarToken, BuscarTrazEspecie);
router.put('/TrazEspecie/:id',ValidarToken, ActualizarTrazEspecie)
router.post('/TrazEspecie',ValidarToken, RegistrarTrazEspecie)
router.delete('/TrazEspecie/:id',ValidarToken, EliminarTrazEspecie);


export default router;
