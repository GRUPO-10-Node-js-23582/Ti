const { conn } = require('../config/conn2');
const crypt = require('bcryptjs')


const getAllUsers = async () => {
    try{
        const [rows] = await conn.query('SELECT * FROM user ;');   
    //const data = await conn.query("SELECT table_name FROM information_schema.tables WHERE table_type='BASE TABLE'; " );
    console.log(' Datos de los usuarios ' , rows);
    return rows;
    }catch(error){
        console.log(' Tuviste un error ' , error);
        const e = {
            isError : true,
            message : `Error al consultar los usuarios : ${error}`
        }
        return e;
    }finally{
        await conn.releaseConnection();
    }  
};

const createUser = async (name,lastname,email, password) => {
    const hash = await crypt.hash(password, 3)
    try{
        const [creado] = await conn.query(`INSERT INTO user (name,lastname,email, password)
        VALUES ("${name}" ,"${lastname}" ,"${email}" ,"${hash}" );`)
        return creado
    }catch(error){
        console.log(" Esto tira el createUser: " ,error);
    }finally{
        conn.releaseConnection();
    }
}

const verificarUser = async (email) => {
	try {
		const [verificado] = await conn.query(`SELECT * FROM user WHERE email = "${email}";`)
		console.log("ESto es lo que sale de verificado :", verificado);
        return verificado
	} catch (error) {
		console.log(" Esto tira el verificarUser: " ,error)
	} finally {
		conn.releaseConnection()
	}
}
 /*
  {
    user_id: 1,
    name: 'Prueba1',
    lastname: 'Prueba1',
    email: 'prueba1@hotmail.com',
    password: 'asdfasdf',
    create_time: 2023-07-13T17:28:11.000Z
  }
 */



module.exports = {
    createUser,
    verificarUser,
    getAllUsers
}