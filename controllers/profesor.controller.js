const Profesor = require('../models/profesor.model')//importa el modelo de mongoose

async function obtenerTdos(){
    return await Profesor.find()
}

async function crear(body){
    const nuevo = new Profesor({
        nombre: body.nombre,
        apellidos: body.apellidos
    })
    await nuevo.save()
    return nuevo
}

async function apagar(id){
    const result = await Profesor.findByIdAndDelete(id)
    return result
}


async function cambiar(id, body){
    const result = await Profesor.replaceOne({_id:id}, body)
    return result
}

async function modificar(id, body){
    const result = await Profesor.findOneAndUpdate(id, body)
    return result
}

module.exports = {
    obtenerTdos,
    crear,
    apagar,
    cambiar,
    modificar
}