import express from 'express';
import { ListarTipoHerramienta, RegistrarTipoHerramienta } from '../controllers/Inventario_tipo_herramientaController.js';
import {ActualizarTipoHerramienta} from '../controllers/Inventario_tipo_herramientaController.js';
import { BuscarTipoHerramienta } from '../controllers/Inventario_tipo_herramientaController.js';
import { EliminarTipoHerramienta } from '../controllers/Inventario_tipo_herramientaController.js';

const router = express.Router();
router.get('/TipoHerramienta', ListarTipoHerramienta);
router.get('/TipoHerramienta/:id', BuscarTipoHerramienta);
router.put('/TipoHerramienta/:id', ActualizarTipoHerramienta)
router.post('/TipoHerramienta', RegistrarTipoHerramienta)
router.delete('/TipoHerramienta/:id', EliminarTipoHerramienta);


export default router;
