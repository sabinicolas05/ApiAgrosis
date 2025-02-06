import express from 'express'; 
const app = express();
const router = express.Router(); 



// VALIDAR  USUARIO / TOKEN 
import  validarUser  from './src/routes/Autenticacion.route.js'; //  Tokens
import  validarToken  from './src/routes/Autenticacion.route.js';

// USERS
import  ListarUsers  from './src/routes/Users_.route.js'; //  ListarUsers
import  ActualizarUsers  from './src/routes/Users_.route.js';
import  RegistrarUsers  from './src/routes/Users_.route.js';
import  BuscarUsers from './src/routes/Users_.route.js'
import  EliminarUsers from './src/routes/Users_.route.js'
// USERS_ROL
import  ListarUsersRol  from './src/routes/Users_Rol.route.js'; //  ListarUsers
import  ActualizarUsersRol  from './src/routes/Users_Rol.route.js';
import  RegistrarUsersRol  from './src/routes/Users_Rol.route.js';
import  BuscarUsersRol from './src/routes/Users_Rol.route.js'
import  EliminarUsersRol from './src/routes/Users_Rol.route.js'




app.use(express.json()); 


// VALIDAR USARIO / TOKEN
app.use/(validarUser);
app.use(validarToken);

// USERS
app.use(ListarUsers);
app.use(ActualizarUsers);
app.use(RegistrarUsers);
app.use/(BuscarUsers);
app.use(EliminarUsers);

// USERS_ROL
app.use(ListarUsersRol);
app.use(ActualizarUsersRol);
app.use(RegistrarUsersRol);
app.use/(BuscarUsersRol);
app.use(EliminarUsersRol);


// Usar el router
app.use(router);

// Inicia el servidor
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
