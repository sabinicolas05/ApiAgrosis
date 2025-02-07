import express from 'express'; 
const app = express();
const router = express.Router(); 

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

app.use(express.json());


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



// Usar el router
app.use(router);

// Inicia el servidor
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
