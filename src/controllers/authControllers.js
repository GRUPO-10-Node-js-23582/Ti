const {getAllUsers}  = require('../models/authModel');
const {createUser}  = require('../models/authModel');
const {verificarUser}  = require('../models/authModel');
const crypt = require('bcryptjs')

const authControllers ={
    // inicio: (req,res) => res.render('index'),
    //getLogin: (req,res) => res.render('pages/admin/login'),
    getLogin: (req, res) => {
		res.render('pages/admin/login2', {
			title: 'Login',
			error: req.query.error
		})
	},
    /*postLogin: (req,res) => {
        res.redirect('/');
    },*/
    postLogin: async (req, res) => {
		const {name,lastname,email, password} = req.body
		const [valido] = await verificarUser(email)
		console.log("Esto sale del valido de postLogin : " ,valido)
		if(valido === undefined){
            console.log(" NO pasa el valido email " , email);
			res.redirect('/auth/login/?error=1')
		} else if(!(await crypt.compare(password, valido.password))){
            console.log(" NO pasa el valido password " , password ,valido.password);
			res.redirect('/auth/login/?error=1')
		} else {
			req.session.user_id = valido.user_id
            console.log("Este es el user_id despues de la session : ", req.session.user_id);
            req.session.isLogged=true;
			res.redirect('/admin/admin');
            console.log(" despues de redirigir ");
		}
	},
    getRegister : (req,res) => res.render('pages/admin/register2'),
    //postRegister : (req,res) => res.render('pages/admin/register'),
    postRegister: async (req,res) => {
        const usuario = await createUser(req.body.name,req.body.lastname ,req.body.email,req.body.password)
        res.redirect('/auth/login');
    },
    
   /* getUsers: async(req,res) => {
        const data = await getAllUsers();
        console.log( ' Datos del authController ' , data);
        //res.send( " Estamos viniendo desde el POST register " , data);
        res.redirect('/')
    },*/
    getUsers: async (req,res) =>{
        const datos = await getAllUsers();
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
    },

    logout :(req,res) => {
        req.session.isLogged=false;
        console.log("el isLogged despues de logout : ", req.session.isLogged);
        res.redirect('/')
    } 
 }
 
 module.exports = authControllers;

 /*
  {
    user_id: 1,
    name: 'Prueba1',
    lastname: 'Prueba1',
    email: 'prueba1@hotmail.com',
    password: 'asdfasdf',
    create_time: 2023-07-13T17:28:11.000Z
  }
 */