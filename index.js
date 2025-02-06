import express from 'express'; 
const app = express();
const router = express.Router(); 



// DOCUMENTACION

app.set('view engine', 'ejs');
app.get('/doc', (req, res) => {
    res.render('documentacion.ejs'); 
  });
