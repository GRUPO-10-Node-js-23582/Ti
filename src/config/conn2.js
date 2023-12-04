const mysql =require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.DBUSER,
    password:process.env.PASS,
    database:process.env.DB,
    port:process.env.DBPORT,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
});

connection.connect((e,conn) => {
    if (e){
        console.log(' ERROR al conectarse WTF!!! ' + e );
    }else{
        console.log(' Conexion a la BBDD exitosa WOOOWW ');
        //conn.releaseConnection();
    }
}

);
//connection.connect();


const prueba = async() => {
    try{
        console.log(' Procesando algo ...');
        const consulta = await connection.query('SELECT * FROM product');
        console.log(consulta);
    }catch(error){
        console.log(' Problemas en puertos ?? ');
        console.log(error);
    }finally{
        connection.releaseConnection();
 
    }
};