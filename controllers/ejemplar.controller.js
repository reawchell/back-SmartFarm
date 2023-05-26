const Ejemplar = require('../models/ejemplar.model')//importa el modelo de mongoose

async function obtenerTdos() {
    const ejemplares = await Ejemplar.find().populate('especie')
    return ejemplares
}

async function obtenerPorEspecie(especieQuery) {
    const ejemplares = await Ejemplar.find({especie:  especieQuery}).populate('especie')
    return ejemplares
}

async function obtenerxId(id) {
    try {
        const ejemplar = await Ejemplar.findOne({ _id: id }).populate('especie');
        if (!ejemplar) {
            throw new Error("No se encontró ningún ejemplar con el ID proporcionado");
        }
        return ejemplar;
    } catch (error) {
        throw new Error("Error al obtener el ejemplar por ID: " + error.message);
    }
}

async function crear(body) {
    const nuevoEjemplar = new Ejemplar(body)
    await nuevoEjemplar.save()
    return nuevoEjemplar
}
async function editar(id, body) {
    try {
        const ejemplar = await Ejemplar.findByIdAndUpdate(id, body);
        return ejemplar
    } catch (error) {
        throw new Error("Error al editar el ejemplar: " + error.message);
    }
}

async function borrar(id) {
    const result = await Ejemplar.findByIdAndDelete(id)
    return result
}


module.exports = {
    obtenerTdos,
    obtenerxId,
    crear,
    editar,
    borrar,
    obtenerPorEspecie
}