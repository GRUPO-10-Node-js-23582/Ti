const {getAllItems} = require('../models/productModel');
const {getProductById}  = require('../services/productServices');
const {getItem} = require('../models/productModel');
const {getAllProducts}  = require('../services/productServices');

const mainControllers ={
    /*inicio: async (req,res) =>{
        const id = req.params.id;

        const datos = await getProductById(id);
        console.log('Datos mainController ' , datos);
        if (datos.isError){
            return  res.status(500).send({
              message : ' Houston we got a problem ',
              error : datos.message
          });
          }
        res.send({
            info: ' Route desde el main controller',
            data: datos
        });
       // res.render('index');
    },*/
    //inicio:(req,res) => res.render('index'),
    inicio: async(req,res) => {
        const data = await getAllProducts();
        //console.log( ' Datos del mainController ' , data);
        res.render('index' , 
        {
            view:{
                title: 'Lista de productos en el index '
            },
            items: data
        });
    },
    home: (req,res) => {
        res.writeHead(200,{
            'Content-Type':'text/html;charset=UTF-8'
        });
        res.end('<h1 style=aligne-center>Route for Home view from controller \n SE LOGRA LOGEAR CORRECTAMENTE  !!!!  </h1>');
    },
    contact:  (req,res) => res.render('pages/admin/contact'),
    about: (req,res) => res.send('Route for About view from controller'),
    faqs: (req,res) => res.send('Route for Faqs view from controller'),
}

module.exports = mainControllers;
