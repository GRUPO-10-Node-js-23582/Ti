const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const validateInput = require('../middlewares/validator');
const {conn} = require('./../config/conn');

const {
    getLogin,
    postLogin,
    getRegister,
    postRegister,
    logout,
    getUsers
} = require('../controllers/authControllers');

const loginValidation =[
    body('email')
    .isEmail()
    .withMessage(' Ingresar un correo valido'),
    body('password')
    .isLength({min:6})
    .isAlphanumeric()
    .withMessage('El password debe tener al menos 6 caracteres y con letras y  numeros')
];
const validacionRegistro = [
	body("email")
	.isLength({min: 3})
	.withMessage("Ingrese un nombre válido")
	.bail()
	.custom((value, {req}) => {
			return new Promise(async (resolve, reject) => {
				try {
					const [usuarioExiste] = await conn.query(`SELECT * FROM user WHERE email = '${value}'`);
                    console.log(" Este es el value del custom :" , value);
                    console.log("Este es el usuario Existe " , usuarioExiste);
					if(usuarioExiste){
                        console.log(" el usuario ya esta en la base de datos ");
						return reject()
					} else {
						return resolve()
					}
				} catch (error) {
					console.log(error)
				}
			})
		})
	.withMessage("Nombre duplicado"),
	body('password')
	.isLength({min: 3})
	.withMessage('Ingrese un password válido')
	.custom((value, {req}) => value === req.body.password2)
	.withMessage('No coindice el password')
	];
    const validacionLogin = [
        body('email')
            .notEmpty()
            .withMessage('El campo de email no puede estar vacío')
            .isLength({min: 3})
            .withMessage('El email debe tener longitud mínima de 3 caracteres'),
            body('password')
            .isLength({min:6})
            .isAlphanumeric()
            .withMessage('El password debe tener al menos 6 caracteres')
        ];

router.get('/auth/login',getLogin);
router.get('/auth/login/:error',getLogin);
router.post('/auth/login',validacionLogin,validateInput, postLogin);
router.get('/auth/register', getRegister);
router.post('/auth/register',validacionRegistro,validateInput, postRegister);
router.get('/auth/user',getUsers);
router.get('/auth/logout',logout);

module.exports = router;
/*
const express = require('express');
const router = express.Router();
authControllers = require('../controllers/authControllers');
router.get('/auth/login',authControllers.getLogin);

module.exports = router;*/