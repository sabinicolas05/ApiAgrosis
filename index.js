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

// TRAZABILIDAD_ACTIVIDAD

import  ListarTrazaActividad  from './src/routes/Trazabilidad_actividad.route.js'; //  ListarTrazaActividad
import  ActualizarTrazaActividad  from './src/routes/Trazabilidad_actividad.route.js';
import  RegistrarTrazaActividad  from './src/routes/Trazabilidad_actividad.route.js';
import  BuscarTrazaActividad from './src/routes/Trazabilidad_actividad.route.js'
import  EliminarTrazaActividad from './src/routes/Trazabilidad_actividad.route.js'


// TRAZABILIDAD_AFEECION

import  ListarTrazAfeccion  from './src/routes/Trazabilidad_afeccion.route.js'; //  ListarTrazAfeccion
import  ActualizarTrazAfeccion  from './src/routes/Trazabilidad_afeccion.route.js';
import  RegistrarTrazAfeccion  from './src/routes/Trazabilidad_afeccion.route.js';
import  BuscarTrazAfeccion from './src/routes/Trazabilidad_afeccion.route.js'
import  EliminarTrazAfeccion from './src/routes/Trazabilidad_afeccion.route.js'


// TRAZABILIDAD_ASIGNACION

import  ListarTrazAsigna  from './src/routes/Trazabilidad_asigna_Act.route.js'; //  ListarTrazAsigna
import  ActualizarTrazAsigna  from './src/routes/Trazabilidad_asigna_Act.route.js';
import  RegistrarTrazAsigna  from './src/routes/Trazabilidad_asigna_Act.route.js';
import  BuscarTrazAsigna from './src/routes/Trazabilidad_asigna_Act.route.js'
import  EliminarTrazAsigna from './src/routes/Trazabilidad_asigna_Act.route.js'

// TRAZABILIDAD_BANCAL

import  ListarTrazBancal  from './src/routes/Trazabilidad_bancal.route.js'; //  ListarTrazBancal
import  ActualizarTrazBancal  from './src/routes/Trazabilidad_bancal.route.js';
import  RegistrarTrazBancal  from './src/routes/Trazabilidad_bancal.route.js';
import  BuscarTrazBancal from './src/routes/Trazabilidad_bancal.route.js'
import  EliminarTrazBancal from './src/routes/Trazabilidad_bancal.route.js'


// TRAZABILIDAD_CONTROL

import  ListarTrazControl  from './src/routes/Trazabilidad_control.route.js'; //  ListarTrazControl
import  ActualizarTrazControl  from './src/routes/Trazabilidad_control.route.js';
import  RegistrarTrazControl  from './src/routes/Trazabilidad_control.route.js';
import  BuscarTrazControl from './src/routes/Trazabilidad_control.route.js'
import  EliminarTrazControl from './src/routes/Trazabilidad_control.route.js'

// TRAZABILIDAD_CULTIVO

import  ListarTrazCultivo  from './src/routes/Trazabilidad_cultivo.route.js'; //  ListarTrazCultivo
import  ActualizarTrazCultivo  from './src/routes/Trazabilidad_cultivo.route.js';
import  RegistrarTrazCultivo  from './src/routes/Trazabilidad_cultivo.route.js';
import  BuscarTrazCultivo from './src/routes/Trazabilidad_cultivo.route.js'
import  EliminarTrazCultivo from './src/routes/Trazabilidad_cultivo.route.js'



// TRAZABILIDAD_ESPECIE
import  ListarTrazEspecie  from './src/routes/Trazabilidad_especie.route.js'; //  ListarTrazEspecie
import  ActualizarTrazEspecie  from './src/routes/Trazabilidad_especie.route.js';
import  RegistrarTrazEspecie  from './src/routes/Trazabilidad_especie.route.js';
import  BuscarTrazEspecie from './src/routes/Trazabilidad_especie.route.js'
import  EliminarTrazEspecie from './src/routes/Trazabilidad_especie.route.js'


// TRAZABILIDAD_LOTE
import  ListarTrazLote  from './src/routes/Trazabilidad_lote.route.js'; //  ListarTrazLote
import  ActualizarTrazLote  from './src/routes/Trazabilidad_lote.route.js';
import  RegistrarTrazLote  from './src/routes/Trazabilidad_lote.route.js';
import  BuscarTrazLote from './src/routes/Trazabilidad_lote.route.js'
import  EliminarTrazLote from './src/routes/Trazabilidad_lote.route.js'


// TRAZABILIDAD_NOTIFICACION
import  ListarTrazNotificacion  from './src/routes/Trazabilidad_notificacion.route.js'; //  ListarTrazNotificacion
import  ActualizarTrazNotificacion  from './src/routes/Trazabilidad_notificacion.route.js';
import  RegistrarTrazNotificacion  from './src/routes/Trazabilidad_notificacion.route.js';
import  BuscarTrazNotificacion from './src/routes/Trazabilidad_notificacion.route.js'
import  EliminarTrazNotificacion from './src/routes/Trazabilidad_notificacion.route.js'


// TRAZABILIDAD_PLAGA
import  ListarTrazPlaga  from './src/routes/Trazabilidad_plaga.route.js'; //  ListarTrazPlaga
import  ActualizarTrazPlaga  from './src/routes/Trazabilidad_plaga.route.js';
import  RegistrarTrazPlaga  from './src/routes/Trazabilidad_plaga.route.js';
import  BuscarTrazPlaga from './src/routes/Trazabilidad_plaga.route.js'
import  EliminarTrazPlaga from './src/routes/Trazabilidad_plaga.route.js'


// TRAZABILIDAD_SEMILLERO
import  ListarTrazSemillero  from './src/routes/Trazabilidad_semilleroroute.js'; //  ListarTrazSemillero
import  ActualizarTrazSemillero  from './src/routes/Trazabilidad_semilleroroute.js';
import  RegistrarTrazSemillero  from './src/routes/Trazabilidad_semilleroroute.js';
import  BuscarTrazSemillero from './src/routes/Trazabilidad_semilleroroute.js'
import  EliminarTrazSemillero from './src/routes/Trazabilidad_semilleroroute.js'


// TRAZABILIDAD_TIPO_ESPECIE
import  ListarTrazTipoEspecie  from './src/routes/Trazabilidad_tipo_especieroute.js'; //  ListarTrazTipoEspecie
import  ActualizarTrazTipoEspecie  from './src/routes/Trazabilidad_tipo_especieroute.js';
import  RegistrarTrazTipoEspecie  from './src/routes/Trazabilidad_tipo_especieroute.js';
import  BuscarTrazTipoEspecie from './src/routes/Trazabilidad_tipo_especieroute.js'
import  EliminarTrazTipoEspecie from './src/routes/Trazabilidad_tipo_especieroute.js'


// TRAZABILIDAD_TIPO_PLAGA
import  ListarTrazTipoPlaga  from './src/routes/Trazabilidad_tipo_plagaroute.js'; //  ListarTrazTipoPlaga
import  ActualizarTrazTipoPlaga  from './src/routes/Trazabilidad_tipo_plagaroute.js';
import  RegistrarTrazTipoPlaga  from './src/routes/Trazabilidad_tipo_plagaroute.js';
import  BuscarTrazTipoPlaga from './src/routes/Trazabilidad_tipo_plagaroute.js'
import  EliminarTrazTipoPlaga from './src/routes/Trazabilidad_tipo_plagaroute.js'


// TRAZABILIDAD_TIPO_RESIDUO
import  ListarTrazTipoResiduo  from './src/routes/Trazabilidad_tipo_residuoroute.js'; //  ListarTrazTipoResiduo
import  ActualizarTrazTipoResiduo  from './src/routes/Trazabilidad_tipo_residuoroute.js';
import  RegistrarTrazTipoResiduo  from './src/routes/Trazabilidad_tipo_residuoroute.js';
import  BuscarTrazTipoResiduo from './src/routes/Trazabilidad_tipo_residuoroute.js'
import  EliminarTrazTipoResiduo from './src/routes/Trazabilidad_tipo_residuoroute.js'



// TIPO_SENSORES

import  ListarTipoSensor  from './src/routes/IoT_Tipo_Sensor.route.js'; //  ListarTipoSensor
import  ActualizarTipoSensor  from './src/routes/IoT_Tipo_Sensor.route.js';
import  RegistrarTipoSensor  from './src/routes/IoT_Tipo_Sensor.route.js';
import  BuscarTipoSensor from './src/routes/IoT_Tipo_Sensor.route.js'
import  EliminarTipoSensor from './src/routes/IoT_Tipo_Sensor.route.js'


// FINANZAS_VENTA
import  ListarFinanzasVenta  from './src/routes/FinanzasVentaroute.js'; //  ListarFinanzasVenta
import  ActualizarFinanzasVenta  from './src/routes/FinanzasVentaroute.js';
import  RegistrarFinanzasVenta  from './src/routes/FinanzasVentaroute.js';
import  BuscarFinanzasVenta from './src/routes/FinanzasVentaroute.js'
import  EliminarFinanzasVenta from './src/routes/FinanzasVentaroute.js'


// FINANZAS_RESIDUO
import  ListarFinanzasResiduo  from './src/routes/FinanzasResiduoroute.js'; //  ListarFinanzasResiduo
import  ActualizarFinanzasResiduo  from './src/routes/FinanzasResiduoroute.js';
import  RegistrarFinanzasResiduo  from './src/routes/FinanzasResiduoroute.js';
import  BuscarFinanzasResiduo from './src/routes/FinanzasResiduoroute.js'
import  EliminarFinanzasResiduo from './src/routes/FinanzasResiduoroute.js'


// FINANZAS_PRODUCCION
import  ListarFinanzasProduccion  from './src/routes/Finanzas_produccionroute.js'; //  ListarFinanzasProduccion
import  ActualizarFinanzasProduccion  from './src/routes/Finanzas_produccionroute.js';
import  RegistrarFinanzasProduccion  from './src/routes/Finanzas_produccionroute.js';
import  BuscarFinanzasProduccion from './src/routes/Finanzas_produccionroute.js'
import  EliminarFinanzasProduccion from './src/routes/Finanzas_produccionroute.js'


// FINANZAS_PAGO
import  ListarFinanzasPago  from './src/routes/FinanzasPago.route.js'; //  ListarFinanzasPago
import  ActualizarFinanzasPago  from './src/routes/FinanzasPago.route.js';
import  RegistrarFinanzasPago  from './src/routes/FinanzasPago.route.js';
import  BuscarFinanzasPago from './src/routes/FinanzasPago.route.js'
import  EliminarFinanzasPago from './src/routes/FinanzasPago.route.js'


// INVENTARIO_HERRAMIENTA
import  ListarInventarioHerramienta  from './src/routes/Inventario_herramienta.route.js'; //  ListarInventarioHerramienta
import  ActualizarInventarioHerramienta  from './src/routes/Inventario_herramienta.route.js';
import  RegistrarInventarioHerramienta  from './src/routes/Inventario_herramienta.route.js';
import  BuscarInventarioHerramienta from './src/routes/Inventario_herramienta.route.js'
import  EliminarInventarioHerramienta from './src/routes/Inventario_herramienta.route.js'


// INVENTARIO_INSUMO
import  ListarInventarioInsumo  from './src/routes/Inventario_isumo.route.js'; //  ListarInventarioInsumo
import  ActualizarInventarioInsumo  from './src/routes/Inventario_isumo.route.js';
import  RegistrarInventarioInsumo  from './src/routes/Inventario_isumo.route.js';
import  BuscarInventarioInsumo from './src/routes/Inventario_isumo.route.js'
import  EliminarInventarioInsumo from './src/routes/Inventario_isumo.route.js'


// INVENTARIO_TIPO_HERRAMIENTA
import  ListarTipoHerramienta  from './src/routes/Inventario_tipo_herramienta.route.js'; //  ListarTipoHerramienta
import  ActualizarTipoHerramienta  from './src/routes/Inventario_tipo_herramienta.route.js';
import  RegistrarTipoHerramienta  from './src/routes/Inventario_tipo_herramienta.route.js';
import  BuscarTipoHerramienta from './src/routes/Inventario_tipo_herramienta.route.js'
import  EliminarTipoHerramienta from './src/routes/Inventario_tipo_herramienta.route.js'


// INVENTARIO_TIPO_INSUMO
import  ListarTipoInsumo  from './src/routes/Inventario_tipo_insumo.route.js'; //  ListarTipoInsumo
import  ActualizarTipoInsumo  from './src/routes/Inventario_tipo_insumo.route.js';
import  RegistrarTipoInsumo  from './src/routes/Inventario_tipo_insumo.route.js';
import  BuscarTipoInsumo from './src/routes/Inventario_tipo_insumo.route.js'
import  EliminarTipoInsumo from './src/routes/Inventario_tipo_insumo.route.js'


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


// FINANZAS_VENTA
app.use(ListarFinanzasVenta);
app.use(ActualizarFinanzasVenta);
app.use(RegistrarFinanzasVenta);
app.use/(BuscarFinanzasVenta);
app.use(EliminarFinanzasVenta);

// FINANZAS_RESIDUO
app.use(ListarFinanzasResiduo);
app.use(ActualizarFinanzasResiduo);
app.use(RegistrarFinanzasResiduo);
app.use/(BuscarFinanzasResiduo);
app.use(EliminarFinanzasResiduo);


// FINANZAS_PRODUCCION
app.use(ListarFinanzasProduccion);
app.use(ActualizarFinanzasProduccion);
app.use(RegistrarFinanzasProduccion);
app.use/(BuscarFinanzasProduccion);
app.use(EliminarFinanzasProduccion);


// FINANZAS_PAGO
app.use(ListarFinanzasPago);
app.use(ActualizarFinanzasPago);
app.use(RegistrarFinanzasPago);
app.use/(BuscarFinanzasPago);
app.use(EliminarFinanzasPago);

// INVENTARIO_HERRAMIENTA
app.use(ListarInventarioHerramienta);
app.use(ActualizarInventarioHerramienta);
app.use(RegistrarInventarioHerramienta);
app.use/(BuscarInventarioHerramienta);
app.use(EliminarInventarioHerramienta);


// INVENTARIO_INSUMO
app.use(ListarInventarioInsumo);
app.use(ActualizarInventarioInsumo);
app.use(RegistrarInventarioInsumo);
app.use/(BuscarInventarioInsumo);
app.use(EliminarInventarioInsumo);


// INVENTARIO_TIPO_HERRAMIENTA
app.use(ListarTipoHerramienta);
app.use(ActualizarTipoHerramienta);
app.use(RegistrarTipoHerramienta);
app.use/(BuscarTipoHerramienta);
app.use(EliminarTipoHerramienta);


// INVENTARIO_TIPO_HERRAMIENTA
app.use(ListarTipoInsumo);
app.use(ActualizarTipoInsumo);
app.use(RegistrarTipoInsumo);
app.use/(BuscarTipoInsumo);
app.use(EliminarTipoInsumo);

// TRAZABILIDAD_ACTIVIDAD
app.use(ListarTrazaActividad);
app.use(ActualizarTrazaActividad);
app.use(RegistrarTrazaActividad);
app.use/(BuscarTrazaActividad);
app.use(EliminarTrazaActividad);

// TRAZABILIDAD_AFECCION
app.use(ListarTrazAfeccion);
app.use(ActualizarTrazAfeccion);
app.use(RegistrarTrazAfeccion);
app.use/(BuscarTrazAfeccion);
app.use(EliminarTrazAfeccion);


// TRAZABILIDAD_ASIGNA_ACTIVIDAD
app.use(ListarTrazAsigna);
app.use(ActualizarTrazAsigna);
app.use(RegistrarTrazAsigna);
app.use/(BuscarTrazAsigna);
app.use(EliminarTrazAsigna);


// TRAZABILIDAD_BANCAL
app.use(ListarTrazBancal);
app.use(ActualizarTrazBancal);
app.use(RegistrarTrazBancal);
app.use/(BuscarTrazBancal);
app.use(EliminarTrazBancal);


// TRAZABILIDAD_CONTROL
app.use(ListarTrazControl);
app.use(ActualizarTrazControl);
app.use(RegistrarTrazControl);
app.use/(BuscarTrazControl);
app.use(EliminarTrazControl);


// TRAZABILIDAD_CULTIVO
app.use(ListarTrazCultivo);
app.use(ActualizarTrazCultivo);
app.use(RegistrarTrazCultivo);
app.use/(BuscarTrazCultivo);
app.use(EliminarTrazCultivo);

// TRAZABILIDAD_ESPECIE
app.use(ListarTrazEspecie);
app.use(ActualizarTrazEspecie);
app.use(RegistrarTrazEspecie);
app.use/(BuscarTrazEspecie);
app.use(EliminarTrazEspecie);


// TRAZABILIDAD_LOTE
app.use(ListarTrazLote);
app.use(ActualizarTrazLote);
app.use(RegistrarTrazLote);
app.use/(BuscarTrazLote);
app.use(EliminarTrazLote);


// TRAZABILIDAD_NOTIFICACION
app.use(ListarTrazNotificacion);
app.use(ActualizarTrazNotificacion);
app.use(RegistrarTrazNotificacion);
app.use/(BuscarTrazNotificacion);
app.use(EliminarTrazNotificacion);


// TRAZABILIDAD_NOTIFICACION
app.use(ListarTrazPlaga);
app.use(ActualizarTrazPlaga);
app.use(RegistrarTrazPlaga);
app.use/(BuscarTrazPlaga);
app.use(EliminarTrazPlaga);




// TRAZABILIDAD_SEMILLERO
app.use(ListarTrazSemillero);
app.use(ActualizarTrazSemillero);
app.use(RegistrarTrazSemillero);
app.use/(BuscarTrazSemillero);
app.use(EliminarTrazSemillero);


// TRAZABILIDAD_TIPO_ESPECIE
app.use(ListarTrazTipoEspecie);
app.use(ActualizarTrazTipoEspecie);
app.use(RegistrarTrazTipoEspecie);
app.use/(BuscarTrazTipoEspecie);
app.use(EliminarTrazTipoEspecie);


// TRAZABILIDAD_TIPO_PLAGA
app.use(ListarTrazTipoPlaga);
app.use(ActualizarTrazTipoPlaga);
app.use(RegistrarTrazTipoPlaga);
app.use/(BuscarTrazTipoPlaga);
app.use(EliminarTrazTipoPlaga);


// TRAZABILIDAD_TIPO_RESIDUO
app.use(ListarTrazTipoResiduo);
app.use(ActualizarTrazTipoResiduo);
app.use(RegistrarTrazTipoResiduo);
app.use/(BuscarTrazTipoResiduo);
app.use(EliminarTrazTipoResiduo);

// DOCUMENTACION

app.set('view engine', 'ejs');
app.get('/doc', (req, res) => {
    res.render('documentacion.ejs'); 
  });


// Usar el router
app.use(router);

// Inicia el servidor
app.listen(4000, () => {
  console.log('Server running on port 4000');
});



