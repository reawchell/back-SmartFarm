const mongoose = require('mongoose')

const asignaturaSchema = new mongoose.Schema({
    nombre: {
        required: true,
        type: String,
    },
  
})

module.exports = mongoose.model('Asignatura', asignaturaSchema)