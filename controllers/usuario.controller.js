//const Usuario = require('../models/Usuario.model')//importa el modelo de mongoose
const Usuario = require('../models/usuario.model')

async function obtenerTodos(){
    const usuarios = await Usuario.find().populate('direccion')// sustituye el id por la info de direccion
    return usuarios
}
// tester
async function obtenerxId(id){
    const Usuario = await Usuario.findOne({_id: id})
    return Usuario
}


async function obtenerxCIF(cif){
    const Usuario = await Usuario.findOne({cif: cif})
    return Usuario
}


async function obtenerxEmpresa(empresa){
    const Empresa = await Usuario.findOne({empresa: empresa})
    return Empresa
}

async function crear(body){
    const nuevoUsuario = new Usuario({
        empresa: body.empresa,
        responsable: body.responsable,
        cif: body.cif,
        telefono: body.telefono,
        direccion: body.direccion,
        password: body.password,
    })
    await nuevoUsuario.save()
    return nuevoUsuario
}

async function modificar(id,body){
    await Usuario.findByIdAndUpdate(id,body)
}

module.exports = {
    obtenerTodos,
    obtenerxId,
    obtenerxCIF,
    crear,
    modificar,
    obtenerxEmpresa,

}
