const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
// Definir el esquema
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
}); 
module.exports=mongoose.model('BaseDatos', PostSchema); // exporto el modelo
