const shopControllers ={
   // inicio: (req,res) => res.render('index'),
    shop: (req,res) => res.render('pages/shop/shop'),
    item: (req,res) => res.render('pages/shop/item'),
    itemId : (req,res) => res.render('pages/shop/item'),
    itemIdAdd : (req,res) => res.render('pages/shop/item'),
    getCart :(req,res) => res.render('pages/admin/cart'),
    postCart:(req,res) => res.render('pages/admin/cart'),
 
}

module.exports = shopControllers;