const e = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASS,
    database:process.env.DB,
    port:process.env.PORT,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
});

pool.getConnection((e,conn) => {
    if (e){
        console.log(' ERROR al conectarse WTF!!! ' + e );
    }else{
        console.log(' Conexion a la BBDD exitosa WOOOWW ');
        conn.release();
    }
});

module.exports = {
    conn: pool.promise()
};