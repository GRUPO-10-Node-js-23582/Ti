const productModel = require('../models/productModel');

const getAllProducts = async() => {
    return await productModel.getAllItems();
}

const getProductById = async(id) => {
    return await productModel.getItem(id);
}

module.exports={
    getProductById,
    getAllProducts
}