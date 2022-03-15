const express = require('express');
const router = express.Router();

const mysqlConexion = require('../Databases/dbMySQL')

router.get('/',(req,res)=>{ //req es request
    mysqlConexion.query('select * from Usuario',(error,rows,fields)=>{
        if(!error){
            res.json(rows);
        }else{
            console.log(error);
        }
    });
});

//Devuelve un solo usuario, filtra por el correo
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

router.post('/',(req,res)=>{
    const {correoElectronico,nombre,apellido1,apellido2,fechaNacimiento,clave,intereses,descripcionGeneral,hobbies} = req.body;
    const query = `
        call insertUsuario(?,?,?,?,?,?,?,?,?)
    `;
    mysqlConexion.query(query,[correoElectronico,nombre,apellido1,apellido2,
        fechaNacimiento,clave,intereses,descripcionGeneral,hobbies],(error,rows,fields)=>{
            if(!error){
                res.json({Status:'Usuario agregado'});
            }
            else{
                console.log(error);
            }
        })
});
module.exports = router;