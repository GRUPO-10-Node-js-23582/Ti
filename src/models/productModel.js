const { conn } = require('../config/conn');

const getAllItems = async () => {
    const data = await conn.query('SELECT * FROM product;');
    console.log('Model data ' , data);
    return data;
}

module.exports = {
    getAllItems
}