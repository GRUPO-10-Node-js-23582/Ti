const isLogged = (req, res,next) => {
    if (req.session.isLogged){
        console.log(" Esto tiene la session: " , req.session);
        return next();
        
    }else{
        console.log(" No tiene los permisos");
        return res.status(401).redirect("/auth/login");

    }
}

module.exports = {
    isLogged
}