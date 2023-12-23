const mysql =require('mysql2');
require('dotenv').config();
/*console.log( "host",process.env.HOST,
    "user",process.env.DBUSER,
    "password",process.env.PASS,
    "database",process.env.DB,
    "port",process.env.DBPORT,);*/
const pool = mysql.createPool({
    host:process.env.HOST2,
    user:process.env.DBUSER2,
    password:process.env.PASS2,
    database:process.env.DB2,
    port:process.env.DBPORT2,
    /*host:"sql5.freesqldatabase.com",
    user:"sql5672165",
    password:"mAm2Qy4Lcx",
    database:"sql5672165",
    port:3306,*/
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
});

pool.getConnection((e,conn) => {
    if (e){
        console.log(' ERROR al conectarse WTF2!!! ' + e );
    }else{
        console.log(' Conexion a la BBDD exitosa WOOOWW 2 ');
        //console.log(conn);
        conn.release();
    }
}

);
//connection.connect();


const prueba = async() => {
    try{
        console.log(' Procesando algo ...');
        const consulta = await pool.query('SELECT * FROM product');
        console.log(consulta);
    }catch(error){
        console.log(' Problemas en puertos ?? ');
        console.log(error);
    }finally{
        pool.releaseConnection();
 
    }
};

module.exports = {
    conn: pool.promise()
};