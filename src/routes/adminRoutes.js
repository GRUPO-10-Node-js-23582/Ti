const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers')

router.get('/',adminControllers.admin);
router.get('/create',adminControllers.getCreate);
router.post('/create', adminControllers.postCreate);
router.get('/edit/:id', adminControllers.postEdit);
router.put('/edit/:id', adminControllers.putEdit);
router.delete('/delete/:id',adminControllers.delete);

module.exports = router;