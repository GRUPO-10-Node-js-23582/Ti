const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers')

//router.get('/', (req,res) => res.send('Route for Shop view '));
router.get('/shop',shopControllers.shop);
router.get('/item',shopControllers.item);
router.get('/item/:id', (req,res) => res.send(`Route for find and retrieve a product from a ID: ${req.params.id} `));
router.post('/item/:id/add', (req,res) => res.send('Route for add the current item to the cart '));
router.get('/cart', (req,res) => res.send('Route for cart view '));
router.post('/cart', (req,res) => res.send('Route for go to the checkout page '));

module.exports = router;