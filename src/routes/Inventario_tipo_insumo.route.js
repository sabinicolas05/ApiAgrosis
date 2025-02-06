import express from 'express';
import { ListarTipoInsumo, RegistrarTipoInsumo } from '../controllers/Inventario_tipo_insumoController.js';
import {ActualizarTipoInsumo} from '../controllers/Inventario_tipo_insumoController.js';
import { BuscarTipoInsumo } from '../controllers/Inventario_tipo_insumoController.js';
import { EliminarTipoInsumo } from '../controllers/Inventario_tipo_insumoController.js';

const router = express.Router();
router.get('/TipoInsumo', ListarTipoInsumo);
router.get('/TipoInsumo/:id', BuscarTipoInsumo);
router.put('/TipoInsumo/:id', ActualizarTipoInsumo)
router.post('/TipoInsumo', RegistrarTipoInsumo)
router.delete('/TipoInsumo/:id', EliminarTipoInsumo);


export default router;
