const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainController')


const isLogged = (req,res,next) => {
    if (!req.session.user_id){
        return res.redirect('/auth/login')
    }
    next()
}

router.get('/',mainControllers.inicio);
router.get('/home',isLogged , mainControllers.home);
router.get('/contact',mainControllers.contact);
router.get('/about', mainControllers.about);
router.get('/faqs', mainControllers.faqs);

module.exports = router;
