import express from 'express';
import { ListarTipoInsumo, RegistrarTipoInsumo } from '../controllers/Inventario_tipo_insumoController.js';
import {ActualizarTipoInsumo} from '../controllers/Inventario_tipo_insumoController.js';
import { BuscarTipoInsumo } from '../controllers/Inventario_tipo_insumoController.js';
import { EliminarTipoInsumo } from '../controllers/Inventario_tipo_insumoController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TipoInsumo',ValidarToken, ListarTipoInsumo);
router.get('/TipoInsumo/:id',ValidarToken, BuscarTipoInsumo);
router.put('/TipoInsumo/:id',ValidarToken, ActualizarTipoInsumo)
router.post('/TipoInsumo',ValidarToken, RegistrarTipoInsumo)
router.delete('/TipoInsumo/:id',ValidarToken, EliminarTipoInsumo);


export default router;
