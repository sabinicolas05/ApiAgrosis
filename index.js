import express from 'express'; 
const app = express();
const router = express.Router(); 



// VALIDAR  USUARIO / TOKEN 
import  validarUser  from './src/routes/Autenticacion.route.js'; //  Tokens
import  validarToken  from './src/routes/Autenticacion.route.js';




app.use(express.json()); 


// VALIDAR USARIO / TOKEN
app.use/(validarUser);
app.use(validarToken);


// Usar el router
app.use(router);

// Inicia el servidor
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
