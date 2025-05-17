const express= require('express');
const router = express.Router(); // permite crear rutas para la base de datos
const BaseDatos = require('../models/BaseDatos'); // importo el modelo

// llamar todas los post de la base de datos
router.get('/', async (req, res) => { 
    try {
        const posts = await BaseDatos.find(); 
        res.json(posts); 
    } catch (err) {
        res.status(500).json({ message: err.message }); // atrapa y envía errores al cliente
    }
}); //Busca y devuelve todos los datos

router.get('/:Datosid', async (req, res) => {
    try {
        const post = await BaseDatos.findById(req.params.Datosid);
        res.json(post);
    } catch (err) {
        res.json({ message: 'error de consulta de base de datos' });
    }
}); //Busca un solo dato por su ID

// Crear un nuevo post
router.post('/', async (req, res) => {
    const post = new BaseDatos({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
    });

    try {
        const savedDatos = await post.save(); 
        res.status(201).json(savedDatos);
    } catch (err) {
        res.json({ message:'error al guardar los datos' });
    }
});

// Actualizar un post
router.patch('/:actualizarId', async (req, res) => {
    try {
        const updatedPost = await BaseDatos.updateOne(
            { _id: req.params.actualizarId },
            { $set: { nombre: req.body.nombre, apellido: req.body.apellido } }
        ); 



        if (updatedPost.matchedCount === 0) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }

        res.json(updatedPost);
    } catch (err) {
        res.json({ message: 'error de actulizar datos' });
    }
});

// Eliminar un post
router.delete('/:DataId', async (req, res) => {
    try {
        const removedPost = await BaseDatos.findByIdAndDelete(req.params.DataId);
        if (!removedPost) {
            return res.status(404).json({ message: 'dato no encontrado' });
        }
        res.json({ message: 'datos eliminado correctamente' });
    } catch (err) {
        res.json({ message: 'error de eliminar datos' });
    }
});

module.exports = router; // exporto el router