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
        required: false,
        type: String
    }
  
})
especieSchema.index({ nombre: 1, sexo: 1, raza: 1 }, { unique: true });
module.exports = mongoose.model('Especie', especieSchema)