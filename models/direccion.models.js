const mongoose = require('mongoose')

const direccionSchema = new mongoose.Schema({
    calle: {
        required: true,
        type: String,
    },
    cp: {
        required: true,
        type: String,
    },
    ciudad: {
        required: true,
        type: String,
    },
    pais: {
        required: true,
        type: String,
    },
  
  
})

module.exports = mongoose.model('Direccion', direccionSchema)