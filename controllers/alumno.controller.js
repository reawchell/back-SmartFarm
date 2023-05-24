//const Alumno = require('../models/alumno.model')//importa el modelo de mongoose
const Alumno = require('../models/alumno.model')

async function obtenerTdos(){
    const alumnos = await Alumno.find().populate('direccion')// sustituye el id por la info de direccion
    return alumnos
}
// tester
async function obtenerxId(id){
    const alumno = await Alumno.findOne({_id: id})
    return alumno
}

async function obtenerxDNI(dni){
    const alumno = await Alumno.findOne({dni: dni})
    return alumno
}

async function crear(body){
    const nuevoAlumno = new Alumno({
        nombre: body.nombre,
        dni: body.dni,
        edad: body.edad,
        direccion: body.direccion,
    })
    await nuevoAlumno.save()
    return nuevoAlumno
}

async function modificar(id,body){
    await Alumno.findByIdAndUpdate(id,body)
}

module.exports = {
    obtenerTdos,
    obtenerxId,
    obtenerxDNI,
    crear,
    modificar,

}
