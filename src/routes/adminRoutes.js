const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers')
const { isLogged } = require('../middlewares/auth');

router.get('/admin',isLogged,adminControllers.admin);
router.get('/create',adminControllers.getCreate);
router.post('/create', adminControllers.postCreate);
router.get('/edit/:id', adminControllers.postEdit);
router.put('/edit/:id', adminControllers.putEdit);
router.delete('/delete/:id',adminControllers.delete);

module.exports = router;