const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers')

router.get('/login',authControllers.getLogin);
router.post('/login', authControllers.postLogin);
router.get('/register', authControllers.getRegister);
router.post('/register', authControllers.postRegister);
router.get('/logout',authControllers.logout);

module.exports = router;

