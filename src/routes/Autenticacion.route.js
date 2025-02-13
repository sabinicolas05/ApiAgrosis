import express from 'express';
import {ValidarUser} from '../controllers/AutenticacionController.js';
import { ValidarToken } from '../controllers/AutenticacionController.js';

const router = express.Router();
router.get('/login', ValidarUser);
router.post('/token', ValidarToken);


export default router;
