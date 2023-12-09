const {getAllProducts}  = require('../services/productServices');
const {getProductById}  = require('../services/productServices');

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
    item: async (req,res) =>{
        const [results] = await getProductById(1);
        if (results.isError){
            return res.status(500).send({
                message: ' No se encuentra el item en la BBDD',
                error: results.message
            });
        }
        
        console.log( ' Datos del shopController ' , results);
        return res.render('pages/shop/item' , 
        {
            view:{
                title: 'Producto en el shop '
            },
            item: results
        });
    } ,

    //itemId : (req,res) => res.render('pages/shop/item'),

    itemId: async (req,res) => {
        const id = req.params.id;
        const [results] = await getProductById(id);
        if (results.isError){
            return res.status(500).send({
                message: ' No se encuentra el item en la BBDD',
                error: results.message
            });
        }
        
        console.log( ' Datos del shopController ' , results);
        return res.render('pages/shop/item' , 
        {
            view:{
                title: 'Producto en el shop '
            },
            item: results
        });
    },
    itemIdAdd : (req,res) => res.render('pages/shop/item'),
    getCart :(req,res) => res.render('pages/shop/cart'),
    postCart:(req,res) => res.render('pages/shop/cart'),
}

module.exports = shopControllers;