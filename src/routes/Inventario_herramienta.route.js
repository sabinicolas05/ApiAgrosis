import express from 'express';
import { ListarInventarioHerramienta, RegistrarInventarioHerramienta } from '../controllers/Inventario_herramientaController.js';
import {ActualizarInventarioHerramienta} from '../controllers/Inventario_herramientaController.js';
import { BuscarInventarioHerramienta } from '../controllers/Inventario_herramientaController.js';
import { EliminarInventarioHerramienta } from '../controllers/Inventario_herramientaController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/InventarioHerramienta',ValidarToken, ListarInventarioHerramienta );
router.get('/InventarioHerramienta/:id',ValidarToken, BuscarInventarioHerramienta);
router.put('/InventarioHerramienta/:id',ValidarToken, ActualizarInventarioHerramienta)
router.post('/InventarioHerramienta',ValidarToken, RegistrarInventarioHerramienta)
router.delete('/InventarioHerramienta/:id',ValidarToken, EliminarInventarioHerramienta);


export default router;
