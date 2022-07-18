var mysql = require('mysql')

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'links',
    user: 'root',
    
});
conexion.connect(function(err){
    if(err){
        throw err;
    }
    else{
        console.log('CONEXION EXITOSA');
    }
});
conexion.end();