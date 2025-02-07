import express from 'express';
import { ListarUser, RegistrarUser } from '../controllers/Users_Controller.js';
import {ActualizarUser} from '../controllers/Users_Controller.js';
import { BuscarUser } from '../controllers/Users_Controller.js';
import { EliminarUser } from '../controllers/Users_Controller.js';

const router = express.Router();
router.get('/User', ListarUser);
router.get('/User/:id', BuscarUser);
router.put('/User/:id', ActualizarUser)
router.post('/User', RegistrarUser)
router.delete('/User/:id', EliminarUser);


export default router;
