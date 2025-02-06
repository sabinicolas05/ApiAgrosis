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



// FINANZAS_VENTA
app.use(ListarFinanzasVenta);
app.use(ActualizarFinanzasVenta);
app.use(RegistrarFinanzasVenta);
app.use/(BuscarFinanzasVenta);
app.use(EliminarFinanzasVenta);


