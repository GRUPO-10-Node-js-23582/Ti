const mainControllers ={
    inicio: (req,res) => res.render('index'),
    
    home: (req,res) => res.send('Route for Home view from controller'),
    contact:  (req,res) => res.render('pages/admin/contact'),
    about: (req,res) => res.send('Route for About view from controller'),
    faqs: (req,res) => res.send('Route for Faqs view from controller'),
}

module.exports = mainControllers;
