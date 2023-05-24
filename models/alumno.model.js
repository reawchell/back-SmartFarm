const mongoose = require('mongoose')

const alumnoSchema = new mongoose.Schema({
    nombre: {
        required: true,
        type: String,
    },
    dni:{
        required: true,
        type: String,
    },
    edad:{
        required: true,
        type: Number,
    },
    esAdmin:{
        type: Boolean,
    },
    apellidos:{
        type: String,
    },
    // direccion es un fichero separado de alumno, se vincula a seguir
    direccion:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Direccion"
    }
})

module.exports = mongoose.model('Alumno', alumnoSchema)