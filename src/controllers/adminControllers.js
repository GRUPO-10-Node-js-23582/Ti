//const {getAllItems} = require('../models/productModel');
const {getAllProducts}  = require('../services/productServices');
const {createProduct}  = require('../services/productServices');
//const { item } = require('./shopControllers');

const adminControllers ={
   /* admin: async (req,res) =>{
        const datos = await getAllProducts();
        //console.log('Datos adminController ' , datos);
        if (datos.isError){
          return  res.status(500).send({
            message : ' Houston we got a problem ',
            error : datos.message
        });
        }
        return res.send({
            info: ' Route desde el admin controller',
            data: datos
        });
    },*/
    //admin: (req,res) => res.render('pages/admin/admin'),
    admin: async(req,res) => {
        const data = await getAllProducts();
        console.log( ' Datos del adminController ' , data);
        res.render('pages/admin/admin' , 
        {
            view:{
                title: 'Lista de productos '
            },
            items: data
        });
    },
    getCreate:  (req,res) => res.render('pages/admin/create'),

    postCreate : async (req,res) => {
        console.log(" Sku desde el body ", req.body.sku);
        const item = req.body;
        console.log(" Item desde el body ", item);
        
        const product = await createProduct(item);
        console.log(" Datos desde el adminCOntroller ", item);

        res.redirect('pages/admin/admin');
    },
    postEdit : (req,res) => res.render('pages/admin/edit'),
    putEdit :(req,res) => res.render('pages/admin/edit'),
    delete:(req,res) => res.render('pages/admin/admin'),

 }
 
 module.exports = adminControllers;