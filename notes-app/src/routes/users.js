const express = require('express');
const router = express.Router();
const  User = require('../models/User');
const passport = require('passport');

// ruta que se llama signin
router.get('/users/signin', (req, res) =>{
    res.render('users/signin');
});

//es el método de autenticación que hicimos en passport, si es correcto se redirecciona a notas
router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/notes',
    // si un usuario digita mal un correo o contraseña, que se redireccione en signin
    failureRedirect: '/users/signin',
    //poder enviarle mensajes flash cuando se va a autentificar
    failureFlash: true
}));


// ruta que se llama signup
router.get('/users/signup', (req, res) =>{
    res.render('users/signup');
});

router.post('/users/signup', async (req, res) => {
    const{ name, email, password, confirm_password } = req.body;
    const errors = [];
    if(email.length <= 0 ){
        errors.push({text: 'Por favor inserte un correo'});
    }
    if(password.length <= 0 ){
        errors.push({text: 'Por favor inserte una contraseña'});
    }
    if(name.length <= 0 ){
        errors.push({text: 'Por favor inserte un nombre'});
    }
    if(password != confirm_password){
        errors.push({text: 'Las constraseñas no coinciden'});
    }
    if(password.length < 4){
        errors.push({text: 'La contraseña debe ser mayor a 4 caracteres.'})
    }
    if(errors.length > 0){
        res.render('users/signup', {errors, name, email, password, confirm_password});
    } else{
        const emailUser = await User.findOne({email: email});
        if(emailUser){
            req.flash('error_msg', 'El email ya está en uso.');
            res.redirect('/users/signup');
        }
       const newUser = new User({name, email, password});
       newUser.password = await newUser.encryptPassword(password);
       await newUser.save();
       req.flash('success_msg', 'Ya estás registrado');
       res.redirect('/users/signin');
    }
});

router.get('/users/logout', (req, res) => {
  req.logout();
  res.redirect('/users/signin');  
});

module.exports = router;