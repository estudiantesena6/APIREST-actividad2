const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const morgan = require('morgan'); 
const bodyparser = require('body-parser'); 
app.use(bodyparser.json()); // herramintas que se va utilizar


const rutasRoute = require('./routes/rutas');
app.use('/servicios',rutasRoute); // conexion a los metodos donde se va autilizar

mongoose.connect('mongodb+srv://estudiantesena4:AEe8ULpnbqZTSer2@clusterapi.hw8finy.mongodb.net/rutas?retryWrites=true&w=majority&appName=clusterAPI',{
    useNewUrlParser: true,
    useUnifiedTopology: true  //evitar advertencias y usar las últimas funciones del driver de MongoDB.
}); // este flacmento de codigo es para la coneccion a la base de datos

const connection = mongoose.connection; // creo una conexion a la base de datos
connection.once('open', () =>{
    console.log('conexion de la base de datos es exitosa')
});


app.listen(9009); // puerdo por donde escucha