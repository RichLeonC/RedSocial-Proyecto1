var express = require('express');
const helmet = require('helmet');
const morgan = require("morgan");
const usuariosRoute = require("./routes/usuarios");
const postsRoute = require("./routes/posts.js");
const app = express();
const mongoose = require('./Databases/dbMongo');
const multer = require('multer') //Para cargar archivos
const path = require('path');

//Settings
app.set('port',process.env.PORT||3000); //Setea una variable port, el cual es la que nos puede proveer un SO, caso contrario puerto 3000

// Middlewares (son funciones que se ejecutan antes de que se procese algo)
app.use(express.json()); //Hace que el servidor entienda formato JSON, para poder accederlo
app.use(morgan("common"));


const storage = multer.diskStorage({ //Donde se va a almacenar el archivo cargado
    destination:(req,file,cb)=>{
        cb(null,"public/images")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload = multer({storage});
app.post('/upload',upload.single('file'),(req,res)=>{ //Carga el archivo
    try{
        return res.status(200).json('Archivo cargado correctamente')
    }catch(error){
        console.log(error);
    }
})

//Routes (son las url's del servidor)
app.use("/usuarios",usuariosRoute);
app.use("/posts",postsRoute);
app.use("/images",express.static(path.join(__dirname,'../public/images')));//Para acceder a las imagenes desde la URL


//Starting the server
app.listen(app.get('port'),()=>{ //Va abrir el server en el puerto 3000
    console.log('Server on port',app.get('port'));
})

