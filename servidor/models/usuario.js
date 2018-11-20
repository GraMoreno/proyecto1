//import mongoose
var mongoose= require('mongoose');
//create objet schema
var Schema= mongoose.Schema;
//create of model
var UserSchema = Schema({
    nombre: {type:String, required: true},
    email: {type:String, required: true}
});
// export module
module.exports = mongoose.model('user', UserSchema);