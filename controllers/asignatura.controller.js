const Asignatura = require('../models/asignatura.model')//importa el modelo de mongoose

async function obtenerTdos(){
    const asignaturas = await Asignatura.find()
    return asignaturas
}


async function crear(body){
    const nuevaAsignatura = new Asignatura({
        nombre: body.nombre
    })
    await nuevaAsignatura.save()
    return nuevaAsignatura
}

async function apagar(id){
const result = await Asignatura.findByIdAndDelete(id)
return result
}

module.exports = {
    obtenerTdos,
    crear,
    apagar,
}