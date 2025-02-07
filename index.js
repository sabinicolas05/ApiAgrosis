import express from 'express'; 
const app = express();
const router = express.Router(); 



app.use(express.json()); 

// Usar el router
app.use(router);

// Inicia el servidor
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
