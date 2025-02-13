import express from 'express';
import { ListarTipoHerramienta, RegistrarTipoHerramienta } from '../controllers/Inventario_tipo_herramientaController.js';
import {ActualizarTipoHerramienta} from '../controllers/Inventario_tipo_herramientaController.js';
import { BuscarTipoHerramienta } from '../controllers/Inventario_tipo_herramientaController.js';
import { EliminarTipoHerramienta } from '../controllers/Inventario_tipo_herramientaController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/TipoHerramienta',ValidarToken, ListarTipoHerramienta);
router.get('/TipoHerramienta/:id',ValidarToken, BuscarTipoHerramienta);
router.put('/TipoHerramienta/:id',ValidarToken, ActualizarTipoHerramienta)
router.post('/TipoHerramienta',ValidarToken, RegistrarTipoHerramienta)
router.delete('/TipoHerramienta/:id',ValidarToken, EliminarTipoHerramienta);


export default router;
