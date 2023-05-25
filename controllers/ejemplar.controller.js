const Ejemplar = require('../models/ejemplar.model')//importa el modelo de mongoose

async function obtenerTdos(){
    const ejemplares = await Ejemplar.find().populate('especie')
    return ejemplares
}

async function crear(body){
    const nuevoEjemplar = new Ejemplar({
        peso: body.peso,
        edad: body.edad,
        salud: body.salud,
        especie: body.especie,
    })
    await nuevoEjemplar.save()
    return nuevoEjemplar
}


async function apagar(id){
    const result = await Ejemplar.findByIdAndDelete(id)
    return result
}


async function cambiar(id, body){
    const result = await Ejemplar.replaceOne({_id:id}, body)
    return result
}

async function modificar(id, body){
    const result = await Ejemplar.findOneAndUpdate(id, body)
    return result
}

module.exports = {
    obtenerTdos,
    crear,
    apagar,
    cambiar,
    modificar
}