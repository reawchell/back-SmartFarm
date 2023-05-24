const mongoose = require('mongoose')

const especieSchema = new mongoose.Schema({
    nombre: {
        required: true,
        type: String,
    },
    sexo: {
        required: true,
        type: String,
    },
    raza:{
        required: true,
        type: String,
    },
    imagen: {
        type: String
    }
  
})

module.exports = mongoose.model('Especie', especieSchema)