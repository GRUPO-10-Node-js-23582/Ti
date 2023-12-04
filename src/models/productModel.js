const { conn } = require('../config/conn');

const getAllItems = async () => {
    const data = await conn.query('SELECT * FROM product;');
    
    //const data = await conn.query("SELECT table_name FROM information_schema.tables WHERE table_type='BASE TABLE'; " );
    console.log('Model data ' , data);
    return data;
}

module.exports = {
    getAllItems
}