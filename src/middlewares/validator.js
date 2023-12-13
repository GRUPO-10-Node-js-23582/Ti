const {validationResult} = require('express-validator');

// Middleware de validacion

const validateInput = (req, res,next) => {
    const errors = validationResult(req); // Extrae los errores
    if (!errors.isEmpty()) {
        // Si hay errores se devuelven al cliente
        return res.status(400).json({errors: errors.array()});
    }
    next();  // Sino se pasa al controller 
};

module.exports = validateInput;