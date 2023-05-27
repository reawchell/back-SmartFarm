const express = require('express')
const router = express.Router()
//const {obtenerTdos, obtenerxDNI, crear} = require('../controllers/Usuario.controller')
const usuarioController = require('../controllers/usuario.controller')
const direccionController = require('../controllers/direccion.controller')
const { check1, check2, esModificacionAceptada, esCif } = require('../middlewares/usuario.middlewares') //esCifValido
const {estaLoggeado} = require("../middlewares/usuario.middlewares")


router.get("/", async (req, res) => {
    try {
        const usuarios = await usuarioController.obtenerTodos()
        res.json(usuarios)
    } catch (error) {
        res.status(500)
        res.json({ msg: 'No tienes permisos para acceder' })
    }
})
router.get("/:id", async (req, res) => { //, check1
    try {
        const usuario = await usuarioController.obtenerxId(req.params.id)
        res.json(usuario)
    } catch (error) {
        res.status(500)
        res.json({ msg: 'Ha ocurrido un fallo en el id' })
    }
})
//Query para filtros


router.post("/", async (req, res) => { //esCifValido,
    try {
        const nuevaDireccion = await direccionController.crear(req.body.direccion)
        const nuevoUsuario = { ...req.body, direccion: nuevaDireccion._id };
        const usuarioCreado = await usuarioController.crear(nuevoUsuario);
        res.json(usuarioCreado)
    } catch (error) {
        res.status(500)
        res.json({ msg: 'Ha ocurrido un fallo 2' })
    }
})
router.post("/login", async (req, res) => { //esCifValido,
    try {
        const userInfo = await usuarioController.login(req, res);
        res.json({
            status: 200,
            user: userInfo.user,
            token: userInfo.token,
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            data: null,
        });
    }
});
router.get("/logout", async (req, res) => {
    try {
        await usuarioController.logout(req, res);
        res.json({
            status: 200,
            token: null,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            data: null,
        });
    }
});

router.patch("/:id",estaLoggeado, async (req, res) => { //esCifValido,esModificacionAceptada,
    try {
        await usuarioController.modificar(req.params.id, req.body)
        res.json({ msg: 'La información se ha actualizado correctamente' })
    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({ msg: 'Ha ocurrido un fallo' })
    }
})

router.delete("/:id",estaLoggeado, async (req, res) => {
    try {
        await usuarioController.borrar(req.params.id)
        res.json({ msg: "Eliminado!" })
    } catch (error) {
        res.status(500)
        res.json({ msg: "Ha ocurrido un fallo" })
    }
})

module.exports = router