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


// SENSORE

import  ListarSensor  from './src/routes/IoT_Sensor.route.js'; //  ListarSensor
import  ActualizarSensor  from './src/routes/IoT_Sensor.route.js';
import  RegistrarSensor  from './src/routes/IoT_Sensor.route.js';
import  BuscarSensor from './src/routes/IoT_Sensor.route.js'
import  EliminarSensor from './src/routes/IoT_Sensor.route.js'

// CONFIGURACION_SENSORES

import  ListarSensorConfig  from './src/routes/IoT_Coniguracion.route.js'; //  ListarSensorConfig
import  ActualizarSensorConfig  from './src/routes/IoT_Coniguracion.route.js';
import  RegistrarSensorConfig  from './src/routes/IoT_Coniguracion.route.js';
import  BuscarSensorConfig from './src/routes/IoT_Coniguracion.route.js'
import  EliminarSensorConfig from './src/routes/IoT_Coniguracion.route.js'

// TIPO_SENSORES

import  ListarTipoSensor  from './src/routes/IoT_Tipo_Sensor.route.js'; //  ListarTipoSensor
import  ActualizarTipoSensor  from './src/routes/IoT_Tipo_Sensor.route.js';
import  RegistrarTipoSensor  from './src/routes/IoT_Tipo_Sensor.route.js';
import  BuscarTipoSensor from './src/routes/IoT_Tipo_Sensor.route.js'
import  EliminarTipoSensor from './src/routes/IoT_Tipo_Sensor.route.js'




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



// SENSORES
app.use(ListarSensor);
app.use(ActualizarSensor);
app.use(RegistrarSensor);
app.use/(BuscarSensor);
app.use(EliminarSensor);

// CONFIGURACION SENSOR
app.use(ListarSensorConfig);
app.use(ActualizarSensorConfig);
app.use(RegistrarSensorConfig);
app.use/(BuscarSensorConfig);
app.use(EliminarSensorConfig);

// TIPO_SENSOR
app.use(ListarTipoSensor);
app.use(ActualizarTipoSensor);
app.use(RegistrarTipoSensor);
app.use/(BuscarTipoSensor);
app.use(EliminarTipoSensor);






// Usar el router
app.use(router);

// Inicia el servidor
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
