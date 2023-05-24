const mongoose = require('mongoose')

const ejemplarSchema = new mongoose.Schema({
    peso: {
        required: true,
        type: Number,
    },
   
    edad:{
        requiered: true,
        type: Number,
    },
    
    salud: {
        requiered: true,
        type: String
    
    },

    especie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Especie",
        required: true,
      },

})


module.exports = mongoose.model('Ejemplar', ejemplarSchema)