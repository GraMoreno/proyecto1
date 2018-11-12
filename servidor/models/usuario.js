//import mongoose
var mongoose= require('mongoose');
//create objet schema
var Schema= mongoose.schema;
//create of model
var UserSchema = Schema({
    nombre: {type:string, required: true},
    email: {type:string, required: true}
});
// export module
module.exports = mongoose.model('user', UserSchema);