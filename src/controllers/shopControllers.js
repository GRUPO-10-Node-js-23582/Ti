const {getAllProducts}  = require('../services/productServices');

const shopControllers ={
   
    //shop: (req,res) => res.render('pages/shop/shop'),
    shop: async(req,res) => {
        const data = await getAllProducts();
        console.log( ' Datos del shopController ' , data);
        res.render('pages/shop/shop' , 
        {
            view:{
                title: 'Lista de productos en el shop '
            },
            items: data
        });
    },
    item: (req,res) => res.render('pages/shop/item'),
    itemId : (req,res) => res.render('pages/shop/item'),
    itemIdAdd : (req,res) => res.render('pages/shop/item'),
    getCart :(req,res) => res.render('pages/shop/cart'),
    postCart:(req,res) => res.render('pages/shop/cart'),
}

module.exports = shopControllers;