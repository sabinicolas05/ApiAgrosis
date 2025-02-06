import express from 'express'; 
const app = express();
const router = express.Router(); 

// DOCUMENTACION

app.set('view engine', 'ejs');
app.get('/doc', (req, res) => {
    res.render('documentacion.ejs'); 
  });

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
