const Especie = require('../models/especie.model')//importa el modelo de mongoose

async function obtenerTdos(){
    const especies = await Especie.find()
    return especies
}


async function crear(body){
    const nuevaEspecie = new Especie({
        // id: body.id,
        nombre: body.nombre,
        sexo: body.sexo,
        raza: body.raza,
        imagen: body.imagen
        
    })
    await nuevaEspecie.save()
    return nuevaEspecie
}

async function modificar(id,body){
    await ejemplar.findByIdAndUpdate(id,body)
}

module.exports = {
    obtenerTdos,
    crear,
}