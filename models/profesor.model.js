const mongoose = require('mongoose')

const profesorSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
   
    apellidos:{
        type: String,
    }
})

module.exports = mongoose.model('Profesor', profesorSchema)