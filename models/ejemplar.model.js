const mongoose = require('mongoose')

const ejemplarSchema = new mongoose.Schema({
    peso: {
        required: true,
        type: Number,
    },

    edad: {
        required: true,
        type: Number,
    },

    salud: {
        required: true,
        type: String,

    },

    especie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Especie",
        required: true,
    },

});


module.exports = mongoose.model('Ejemplar', ejemplarSchema)