const passport = require('passport');
//requiere passport-local, strategy es la estrategia de autenticación, es un método de la dependencia
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
    //a través de qué se va a autentificar, en este caso el correo
    usernameField: 'email'
    //función para validar
}, async (email, password, done) => {
    //busca un usuario a través del correo
  const  user = await User.findOne({email: email});
  //si se ingresa con un correo que no está en la base de datos, le retorna un mensaje diciendo que no se encuentra
  if(!user){
      return done(null, false, { message: 'Usuario No encontrado.'});
      //si encontró el usuario...
  } else{
      //recibe una contraseña con el método matchpassword que está en User.js
    const match = await  user.matchPassword(password);
    //si coincide el dato con el guardado, más el correo está válido, le devuelve el usuario
    if(match){
        return done(null, user);
        //si ni la contraseña ni el correo es correcto, muestra un mensaje diciendo que es incorrecto
    } else {
        return done (null, false, {message: 'Usuario o Contraseña Incorrecta'});
    }
  }
}));

//ese método sirve toma un usuario se autentique, almacenar el usuario
passport.serializeUser((user, done) =>{
    done(null, user.id);
});

//busca en la base y si hay un usuario en la sesión lo retorna.
passport.deserializeUser((id, done) =>{
    User.findById(id, (err,user) =>{
        done(err, user);
    });
});