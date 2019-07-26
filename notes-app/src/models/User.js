const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: {  type: String, required: true },
    date: { type: Date, default: Date.now}
});

//cifra la contraseña
UserSchema.methods.encryptPassword = async (password) =>{
    //genSalt es un método hash para la contraseña, la esconde por así decirlo
   const salt = await bcrypt.genSalt(10);
   const hash = bcrypt.hash(password, salt);
   return hash;
};

//toma la contraseña y lo compara con la base de datos, con la función puede
//acceder a UserSchema, a los datos, para poder instanciarlo, por eso no se le colocan
//las flechas como comúnmente se colocan para algún método.
UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);