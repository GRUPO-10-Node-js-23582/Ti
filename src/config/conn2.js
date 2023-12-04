const mysql =require('mysql2');

const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
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
        conn.release();
    }
}

);

const prueba = async() => {
    try{
        const consulta = await connection.query('SELECT * FROM tabla');
        console.log(consulta);
    }catch(error){
        console.log(' Problemas en puertos ?? ');
        console.log(error);
    }finally{
        connection.releaseConnection();
    }
}