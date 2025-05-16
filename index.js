const express = require('express');
const app = express(); // app es como se llama la función del paquete express

app.get('/', (req, res) =>{
    res.send('servicio funcionando') // envia respuesta a cualquier tipo de texto
});

app.listen(9009); // puerdo por donde escucha