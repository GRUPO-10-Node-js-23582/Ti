const productModel = require('../models/productModel');

const getAllProducts = async() => {
    return await productModel.getAllItems();
}

const getProductById = async(id) => {
    return await productModel.getItem({product_id: id});
}

module.exports={
    getProductById,
    getAllProducts
}