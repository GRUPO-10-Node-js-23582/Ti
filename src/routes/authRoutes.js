const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers')

router.get('/auth/login',authControllers.getLogin);
router.post('/auth/login', authControllers.postLogin);
router.get('/auth/register', authControllers.getRegister);
router.post('/auth/register', authControllers.postRegister);
router.get('/auth/logout',authControllers.logout);

module.exports = router;

