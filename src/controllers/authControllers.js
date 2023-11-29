const authControllers ={
    // inicio: (req,res) => res.render('index'),
    getLogin: (req,res) => res.render('pages/admin/login'),
    postLogin: (req,res) => res.render('pages/admin/login'),
    getRegister : (req,res) => res.render('pages/admin/register'),
    postRegister : (req,res) => res.render('pages/admin/register'),
    logout :(req,res) => res.render('pages/admin/login'), 
 }
 
 module.exports = authControllers;