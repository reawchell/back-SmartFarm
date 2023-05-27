
const express = require('express')
const router = express.Router()
const { obtenerTdos, crear, borrar } = require('../controllers/especie.controller')
//const { crear } = require('../controllers/alumno.controller')
const {estaLoggeado} = require("../middlewares/usuario.middlewares")

router.get('/',estaLoggeado, async (req, res) => {
    try {
        const especies = await obtenerTdos()
        res.json(especies)
    } catch (error) {
        res.status(500)
        res.json({ msg: 'Ha ocurrido un fallo 1' })
    }
})

router.post('/',estaLoggeado, async (req, res) => {
     try {
         //console.log(req.body)
         const nuevaEspecie = await crear(req.body)
         res.json(nuevaEspecie)
     } catch (error) {
         res.status(500)
         res.json({ msg: 'Ha ocurrido un fallo 2' })
     }
})

router.delete('/:id',estaLoggeado, async (req, res) => {
    try {
        //await Asignatura.deleteOne({_id: req.params.id})
        await borrar(req.params.id)
        res.json({ msg: 'result' })
    } catch (error) {
        res.status(500)
        res.json({ msg: 'Ha ocurrido un fallo' })
    }
})

module.exports = router