const express = require('express');
const router = express.Router();

const mysqlConexion = require('../Databases/dbMySQL')

router.get('/',(req,res)=>{
    mysqlConexion.query('select * from Usuario',(error,rows,fields)=>{
        if(!error){
            res.json(rows);
        }else{
            console.log(error);
        }
    });
});
module.exports = router;