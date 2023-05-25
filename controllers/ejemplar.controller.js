const Ejemplar = require('../models/ejemplar.model')//importa el modelo de mongoose

async function obtenerTdos() {
    const ejemplares = await Ejemplar.find().populate('especie')
    return ejemplares
}
async function obtenerxId(id) {
    try {
        const ejemplar = await Ejemplar.findOne({ _id: id });
        if (!ejemplar) {
            throw new Error("No se encontró ningún ejemplar con el ID proporcionado");
        }
        return ejemplar;
    } catch (error) {
        throw new Error("Error al obtener el ejemplar por ID: " + error.message);
    }
}

async function crear(body) {
    const nuevoEjemplar = new Ejemplar({
        peso: body.peso,
        edad: body.edad,
        salud: body.salud,
        especie: body.especie,
    })
    await nuevoEjemplar.save()
    return nuevoEjemplar
}
async function editar(id, body) {
    try {
        const ejemplar = await Ejemplar.findById(id);
        console.log(ejemplar)
        if (!ejemplar) {
            throw new Error("No se encontró el ejemplar con el ID proporcionado");
        }
        ejemplar.peso = body.peso;
        ejemplar.edad = body.edad;
        ejemplar.salud = body.salud;
        ejemplar.especie = body.especie;
        await ejemplar.save();
        return ejemplar;
    } catch (error) {
        throw new Error("Error al editar el ejemplar: " + error.message);
    }
}

async function apagar(id) {
    const result = await Ejemplar.findByIdAndDelete(id)
    return result
}

async function cambiar(id, body) {
    const result = await Ejemplar.replaceOne({ _id: id }, body)
    return result
}

async function modificar(id, body) {
    const result = await Ejemplar.findOneAndUpdate(id, body)
    return result
}

module.exports = {
    obtenerTdos,
    crear,
    apagar,
    cambiar,
    modificar,
    obtenerxId,
    editar
}