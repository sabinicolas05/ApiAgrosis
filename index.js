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


