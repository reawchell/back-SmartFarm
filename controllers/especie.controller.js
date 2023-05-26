const Especie = require('../models/especie.model')//importa el modelo de mongoose

async function obtenerTdos(){
    return await Especie.find()
}

async function crear(body){
    const nuevaEspecie = new Especie({
        nombre: body.nombre,
        sexo: body.sexo,
        raza: body.raza,
        imagen: body.imagen,
        
    })
    await nuevaEspecie.save()
    return nuevaEspecie
}

async function modificar(id,body){
    await Especie.findByIdAndUpdate(id,body)
}
async function borrar(id) {
    const result = await Especie.findByIdAndDelete(id)
    return result
}


module.exports = {
    obtenerTdos,
    crear,
    modificar,
    borrar
}