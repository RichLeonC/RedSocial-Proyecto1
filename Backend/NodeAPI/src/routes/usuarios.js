const express = require('express');
const router = express.Router();

const mysqlConexion = require('../Databases/dbMySQL')
//GET
router.get('/',(req,res)=>{ //req es request
    mysqlConexion.query('select * from Usuario',(error,rows,fields)=>{
        if(!error){
            res.json(rows);
        }else{
            console.log(error);
        }
    });
});

//GET Devuelve un solo usuario, filtra por el correo ->localhost:3000/example@gmail.com
router.get('/:correo',(req,res)=>{ 
    const {correo} = req.params; //Quiero el correo que proviene como parametro en la url
    console.log(correo);
    mysqlConexion.query('select * from Usuario where correoElectronico = ?',[correo],
    (error,rows,fields)=>{
        if(!error){
            res.json(rows[0]);
        }else{
            console.log(error);
        }
    });
})
//POST, recibe un json con los datos del usuario para insertarlo en la tabla en el mySQL
router.post('/usuarios',(req,res)=>{
    const {correoElectronico,nombre,apellido1,apellido2,fechaNacimiento,clave,intereses,descripcionGeneral,hobbies} = req.body;
    const query = `
        call insertUsuario(?,?,?,?,?,?,?,?,?)
    `;
    mysqlConexion.query(query,[correoElectronico,nombre,apellido1,apellido2,
        fechaNacimiento,clave,intereses,descripcionGeneral,hobbies],(error,rows,fields)=>{
            if(!error){
                res.json({status:'Usuario agregado'});
            }
            else{
                console.log(error);
            }
        })
});

//PUT, recibe JSON, solo algunos datos se pueden modificar -> localhost:3000/example@gmail.com
router.put('/:correo',(req,res)=>{
    const {nombre,apellido1,apellido2,fechaNacimiento,clave,intereses,descripcionGeneral,hobbies} = req.body;
    const {correo} = req.params;
    const query = `Call updateUsuario(?,?,?,?,?,?,?,?,?)`
    mysqlConexion.query(query,[correo,nombre,apellido1,apellido2,fechaNacimiento,clave,intereses,
        descripcionGeneral,hobbies],(error,rows,fields)=>{
        
        if(!error){
            res.json({status:'Usuario actualizado'})
        }
        else{
            console.log(error);
        }
    });
});

//DELETE -> localhost:3000/example@gmail.com
router.delete('/:correo',(req,res)=>{
    const {correo} = req.params;
    const query = `
        call deleteUsuario(?)
    `
    mysqlConexion.query(query,[correo],(error,rows,fields)=>{
        if(!error){
            res.json({status:'Usuario Eliminado'})
        }
        else{
            console.log(error);
        }
    });
})
module.exports = router;