var mysql = require('mysql');

var mysqlConexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'cmp250230',
    database: 'dbRedSocialSQL'
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
