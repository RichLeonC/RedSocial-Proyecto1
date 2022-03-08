var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'dbRedSocialSQL',
    user: 'root',
    password:'admin'
});

conexion.connect(function{
    
})