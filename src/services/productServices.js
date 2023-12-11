const productModel = require('../models/productModel');

const getAllProducts = async() => {
    return await productModel.getAllItems();
}

const getProductById = async(id) => {
    return await productModel.getItem(id);
}

const createProduct = async (item) =>{
    const productSchema={
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        stock: item.stock,
        discount: item.discount,
        sku: item.sku,
        dues: item.dues,
        image_front: item.image_front,
        image_back: item.image_back,
        licence_id: item.licence_id,
        category_id: item.category_id
    }
    console.log(" COntenido desde productSchema ",productSchema);
    return await productModel.create([Object.values(productSchema)]);   
} 

const editProduct = async (item,id) =>{
    const productSchema={
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        stock: item.stock,
        discount: item.discount,
        sku: item.sku,
        dues: item.dues,
        image_front: item.image_front,
        image_back: item.image_back,
        licence_id: item.licence_id,
        category_id: item.category_id
    }
    return await productModel.edit(productSchema, id );   
} 

const deleteProduct = async(id) => {
    return await productModel.delete(id);
}



module.exports={
    getProductById,
    getAllProducts,
    createProduct,
    editProduct,
    deleteProduct
}