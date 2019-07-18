const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

// Initializations
const app = express();
require('./config/passport');

//llama al archivo database
require('./databse');

//Settings
app.set('port', process.env.PORT || 3000);
//si hay un puerto que lo use, sino usar el puerto 3000
app.set('views', path.join(__dirname, 'views'));
//une directorios, le devuelve la carpeta src y se puede concatenar con otra carpeta
//como decirle que ahí está la carpeta vies
app.engine('.hbs', exphbs({
    //son los tipos de cómo se van a manejar las vistas
    defaultLayout: 'main',
    //cuando se va a usar una navegación que se va a repetir en varias vistas
    layoutsDir: path.join(app.get('views'), 'layouts'),
    //devuelve la dirección de views y lo concatena con layouts
    partialsDir: path.join(app.get('views'), 'partials'),
    //pequeñas partes de html que se pueden reutilizar, ej: frm y llamarlo cuando se quiera
    //devuelve la dirección de views y lo concatena con partials
    extname: '.hbs' //la extensión que terminan los archivos
}));
app.set('view engine', '.hbs');
//configurar el motor de las vistas .hbs
//path une directorios

//Middleswares
app.use(express.urlencoded({extended: false}));
//urlencoded es cuando un formulario o frm me envía un dato se entienda
//usuario se quiera registrar le envia los datos.
app.use(methodOverride('_method'));
//se puedan usar otros tipos de métodos como put y delete
app.use(session({
    //para usarlo en la sesión
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
    //propiedades, con esto ayuda a autenticar al usuario
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Global Variables
app.use((req, res, next) => {
   res.locals.success_msg = req.flash('success_msg');
   res.locals.error_msg = req.flash('error_msg');
   res.locals.error = req.flash('error');
   res.locals.user = req.user || null;
    next();
});

//Routes
//diferentes tipos de rutas, llama los archivos de la carpeta rutas.
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

// Static Files
//configura los archivos estátivos, devuelve la carpeta src y lo concatena con la carpeta public
//como decir que la carpeta public está ahí
app.use(express.static(path.join(__dirname, 'public')));

// Server is listenning
//escuchando el puerto
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});