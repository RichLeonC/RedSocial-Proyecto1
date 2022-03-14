var express = require('express');
const app = express();

//Settings
app.set('port',process.env.PORT||3000); //Setea una variable port, el cual es la que nos puede proveer un SO, caso contrario puerto 3000

// Middlewares (son funciones que se ejecutan antes de que se procese algo)
app.use(express.json()); //Hace que el servidor entienda formato JSON, para poder accederlo

//Routes (son las url's del servidor)
app.use(require('./routes/usuarios'))
//Starting the server
app.listen(app.get('port'),()=>{ //Va abrir el server en el puerto 3000
    console.log('Server on port',app.get('port'));
})