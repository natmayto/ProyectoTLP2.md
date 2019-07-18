const mongoose = require('mongoose');

//configuraciones con mongo
mongoose.connect('mongodb://localhost/notes-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
//si se conecta que diga que está conectada, sino que muestre error
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));