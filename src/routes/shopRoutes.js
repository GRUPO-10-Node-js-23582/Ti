const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers')

//router.get('/', (req,res) => res.send('Route for Shop view '));
router.get('/shop',shopControllers.shop);
router.get('/item',shopControllers.item);
router.get('/item/:id', shopControllers.itemId);
router.post('/item/:id/add', shopControllers.itemIdAdd);
router.get('/cart', shopControllers.getCart);
router.post('/cart',shopControllers.postCart);

module.exports = router;