const adminControllers ={
    // inicio: (req,res) => res.render('index'),
    admin: (req,res) => res.render('pages/admin/admin'),
    getCreate: (req,res) => res.render('pages/admin/create'),
    postCreate : (req,res) => res.render('pages/admin/create'),
    postEdit : (req,res) => res.render('pages/admin/edit'),
    putEdit :(req,res) => res.render('pages/admin/edit'),
    delete:(req,res) => res.render('pages/admin/admin'),
  
 }
 
 module.exports = adminControllers;