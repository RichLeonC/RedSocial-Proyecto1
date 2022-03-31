var express = require('express');
const helmet = require('helmet');
const morgan = require("morgan");
const usuariosRoute = require("./routes/usuarios");
const postsRoute = require("./routes/posts.js");
const app = express();
const mongoose = require('./Databases/dbMongo');

const app1 = require('./routes/firebasechat.js');

//Settings
app.set('port',process.env.PORT||3000); //Setea una variable port, el cual es la que nos puede proveer un SO, caso contrario puerto 3000

// Middlewares (son funciones que se ejecutan antes de que se procese algo)
app.use(express.json()); //Hace que el servidor entienda formato JSON, para poder accederlo
545454
//app.use(helmet()); //Ayuda a la seguridad 
app.use(morgan("common"));
//Routes (son las url's del servidor)
app.use("/usuarios",usuariosRoute);
app.use("/posts",postsRoute);

//Starting the server
app.listen(app.get('port'),()=>{ //Va abrir el server en el puerto 3000
    console.log('Server on port',app.get('port'));
})

app1.listen(4000)

console.log('Server on port 4000'); 