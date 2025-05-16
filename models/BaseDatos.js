const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({

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
        required:Date.now
    }
}); 
module.exports=mongoose.model('BaseDatos', PostSchema); // exporto el modelo
