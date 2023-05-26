//const Usuario = require('../models/Usuario.model')//importa el modelo de mongoose
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Usuario = require('../models/usuario.model')


async function obtenerTodos() {
    const usuarios = await Usuario.find().populate('direccion')// sustituye el id por la info de direccion
    return usuarios
}

async function obtenerxId(id) {
    try {
        const usuario = await Usuario.findOne({ _id: id }).populate('direccion');
        if (!usuario) {
            throw new Error("No se encontró ningún Usuario con el ID proporcionado");
        }
        return usuario;
    } catch (error) {
        throw new Error("Error al obtener el ejemplar por ID: " + error.message);
    }
}

async function obtenerxCIF(cif) {
    const usuario = await Usuario.findOne({ cif: cif }).populate('direccion')
    return usuario
}

async function obtenerxEmpresa(empresa) {
    const Empresa = await Usuario.findOne({ empresa: empresa })
    return Empresa
}

async function crear(body) {
    const nuevoUsuario = new Usuario({
        empresa: body.empresa,
        email: body.email,
        responsable: body.responsable,
        cif: body.cif,
        telefono: body.telefono,
        direccion: body.direccion,
        password: body.password,
    })
    await nuevoUsuario.save()
    return nuevoUsuario
}
const login = async (req, res, next) => {
    try {
        const userInfo = await Usuario.findOne({ email: req.body.email });
        console.log(userInfo.password,req.body.password)
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            console.log(userInfo)
            userInfo.password = null;
            const token = jwt.sign(
                {
                    id: userInfo._id,
                    email: userInfo.email,
                },
                req.app.get("secretKey"),
                { expiresIn: "1h" }
            );
            return res.json({
                status: 200,
                user: userInfo,
                token: token,
            });
        } else {
            return res.json({
                status: 400,
                data: null,
            });
        }
    } catch (error) {
        console.log(error)
        return next(error);
    }
};

const logout = (req, res, next) => {
    try {
        return res.json({
            status: 200,
            token: null,
        });
    } catch (error) {
        return next(error);
    }
};

async function modificar(id, body) {
    await Usuario.findByIdAndUpdate(id, body)
}
async function borrar(id) {
    const result = await Usuario.findByIdAndDelete(id)
    return result
}

module.exports = {
    obtenerTodos,
    obtenerxId,
    obtenerxCIF,
    crear,
    modificar,
    obtenerxEmpresa,
    borrar,
    login,
    logout

}
