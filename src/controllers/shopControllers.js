const shopControllers ={
   // inicio: (req,res) => res.render('index'),
    shop: (req,res) => res.render('pages/shop/shop'),
    item: (req,res) => res.render('pages/shop/item'),
    home: (req,res) => res.send('Route for Home view from controller'),
    contact:  (req,res) => res.send('Route for Contact view from controller'),
    about: (req,res) => res.send('Route for About view from controller'),
    faqs: (req,res) => res.send('Route for Faqs view from controller'),
}

module.exports = shopControllers;