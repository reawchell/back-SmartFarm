const Direccion = require('../models/direccion.models')

async function obtenerTdos(){
    return await Direccion.find()
}

async function crear(body){
    const nueva = new Direccion({
        calle: body.calle,
        cp: body.cp,
        ciudad: body.ciudad,
        pais: body.pais
    })

    await nueva.save()
    return nueva
}
async function modificar(id, body){
    const result = await Direccion.findByIdAndUpdate(id, body)
    return result
}



module.exports = {
    obtenerTdos,
    crear,
    modificar
}