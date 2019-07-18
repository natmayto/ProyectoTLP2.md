const express = require('express');
const { isAuthenticated } = require('../helpers/out');
const router = express.Router();
// tener un objeto que le permita la facilidad de crear rutas
// se crea ruta del servidor con una función, request, res, en la que envía
//la parte interna de la función
//se hace lo mismo con todas las rutas para obtener y enviarse los datos con las rutas
router.get('/', isAuthenticated, (req,res) => {
res.render('index');
});

//ruta llamada about, cuando se visite, se envía lo que hay dentro de lo que solicita la ruta
router.get('/about', isAuthenticated, (req, res) =>{
    res.render('about');
});

module.exports = router;