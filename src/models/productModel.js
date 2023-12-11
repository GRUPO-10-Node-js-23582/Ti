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
        const [rows] = await conn.query('SELECT  * FROM product JOIN licence WHERE  product.product_id=?  AND product.licence_id= licence.licence_id',params);
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

const create = async (params) => {
    try{
        const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES ?;',[params]);

        const result = {
            isError: false,
            message: ' Se modifico el producto correctamente',
            datos: rows
        };
        return result;
    } catch (e){
        const error = {
            isError: true,
            message: ` NO se pudo crear el producto con los valores aportados, error: ${e}`
        };
        return error;
    } finally{
        await conn.releaseConnection();
    }
};


const edit = async (params,id) => {
    try {
        const [rows] = await conn.query(' UPDATE product SET ? WHERE product_id = ?',[params, id]);
        const result = {
            isError: false,
            message: ' Se modifico el producto correctamente',
            datos: rows
        };
        return result;
    } catch (e){
        const error = {
            isError: true,
            message: ` NO se pudo modificar el producto indicado, error: ${e}`
        };
        return error;
    } finally{
        await conn.releaseConnection();
    }
};


const deleteProduct = async (id) => {
    try {
        const [rows] = await conn.query('DELETE FROM product WHERE product_id = ?;', id);
        const result = {
            isError: false,
            message: ' Se elimino el producto correctamente',
            datos: rows
        };
        return result;
    } catch (e){
        const error = {
            isError: true,
            message: ` NO se pudo eliminar el producto indicado, error: ${e}`
        };
        return error;
    } finally{
        await conn.releaseConnection();
    }
};




module.exports = {
    getAllItems,
    getItem,
    create,
    edit,
    deleteProduct
}