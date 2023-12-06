const { conn } = require('../config/conn');

const getAllItems = async () => {
    try{
        const [rows] = await conn.query('SELECT * FROM product JOIN licence WHERE product.licence_id= licence.licence_id ORDER BY product.product_id ;');   
    //const data = await conn.query("SELECT table_name FROM information_schema.tables WHERE table_type='BASE TABLE'; " );
    return rows;
    }catch(error){
        console.log(' Tuviste un error ' , error);
        const e = {
            isError : true,
            message : `Error al consultar los productos : ${error}`
        }
        return e;
    }finally{
        await conn.releaseConnection();
    }  
};

const getItem = async (params) => {
    try{
        const [rows] = await conn.query('SELECT * FROM product WHERE  ?',params);
        return rows;
    }catch(error){
        const e ={
            isError: true,
            message: `Error al consultar el item : ${error}`
        }
        return e;
    }finally{
        await conn.releaseConnection();
    }
}

module.exports = {
    getAllItems,
    getItem
}