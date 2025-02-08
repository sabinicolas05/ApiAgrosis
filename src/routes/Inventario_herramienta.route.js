import express from 'express';
import { ListarInventarioHerramienta, RegistrarInventarioHerramienta } from '../controllers/Inventario_herramientaController.js';
import {ActualizarInventarioHerramienta} from '../controllers/Inventario_herramientaController.js';
import { BuscarInventarioHerramienta } from '../controllers/Inventario_herramientaController.js';
import { EliminarInventarioHerramienta } from '../controllers/Inventario_herramientaController.js';

const router = express.Router();
router.get('/InventarioHerramienta', ListarInventarioHerramienta);
router.get('/InventarioHerramienta/:id', BuscarInventarioHerramienta);
router.put('/InventarioHerramienta/:id', ActualizarInventarioHerramienta)
router.post('/InventarioHerramienta', RegistrarInventarioHerramienta)
router.delete('/InventarioHerramienta/:id', EliminarInventarioHerramienta);


export default router;
