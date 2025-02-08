import express from 'express';
import { ListarInventarioInsumo, RegistrarInventarioInsumo } from '../controllers/Inventario_insumoController.js';
import {ActualizarInventarioInsumo} from '../controllers/Inventario_insumoController.js';
import { BuscarInventarioInsumo } from '../controllers/Inventario_insumoController.js';
import { EliminarInventarioInsumo } from '../controllers/Inventario_insumoController.js';

const router = express.Router();
router.get('/InventarioInsumo', ListarInventarioInsumo);
router.get('/InventarioInsumo/:id', BuscarInventarioInsumo);
router.put('/InventarioInsumo/:id', ActualizarInventarioInsumo)
router.post('/InventarioInsumo', RegistrarInventarioInsumo)
router.delete('/InventarioInsumo/:id', EliminarInventarioInsumo);


export default router;
