import express from 'express';
import { ListarInventarioInsumo, RegistrarInventarioInsumo } from '../controllers/Inventario_insumoController.js';
import {ActualizarInventarioInsumo} from '../controllers/Inventario_insumoController.js';
import { BuscarInventarioInsumo } from '../controllers/Inventario_insumoController.js';
import { EliminarInventarioInsumo } from '../controllers/Inventario_insumoController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/InventarioInsumo',ValidarToken, ListarInventarioInsumo);
router.get('/InventarioInsumo/:id',ValidarToken, BuscarInventarioInsumo);
router.put('/InventarioInsumo/:id',ValidarToken, ActualizarInventarioInsumo)
router.post('/InventarioInsumo',ValidarToken, RegistrarInventarioInsumo)
router.delete('/InventarioInsumo/:id',ValidarToken, EliminarInventarioInsumo);


export default router;
