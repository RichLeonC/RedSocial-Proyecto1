var mysql = require('mysql');

var mysqlConexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'534444',
    database: 'dbredsocialsql'
});

mysqlConexion.connect(error=>{
    if(error){
        console.log('No se pudo realizar la conexion')
        throw error;

    }else{
        console.log('Conexion Exitosa');
    }

})

module.exports = mysqlConexion; //Exportamos la conexion para usarla en otro lado
