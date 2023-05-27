//const { modificar } = require('../controllers/alumno.controller')
const { crear, obtenerTdos, modificar } = require('../controllers/direccion.controller')
const {estaLoggeado} = require("../middlewares/usuario.middlewares")

const express = require('express')
const router = express.Router()

router.get('/',estaLoggeado, async (req, res) => {
    try {
        const direcciones = await obtenerTdos()
        res.json(direcciones)

    } catch (error) {
        res.status(500)
        res.json({ msn: 'um minuto para o fim do mundo' })
    }
})


router.patch("/:id",estaLoggeado, async (req, res) => {
    try {
        const result = modificar(req.params.id, req.body)
        res.json(result)

    } catch (error) {
        res.status(500)
        res.json({ msg: 'toda minha vida em 60 segundos' })
    }
})

router.delete("/:id",estaLoggeado,  async (req, res) => {
    try {
        await eliminar(req.params.id)
        res.json({ msg: 'Dirección eliminada correctamente' })
    } catch (error) {
        res.status(500)
        res.json({ msg: 'Error al eliminar la dirección' })
    }
})


// router.post('/', async(req,res)=>{
//     try{
//         const nueva = await crear(req.body)
//         res.json(nueva)

//     }catch(error){
//         res.status(500)
//         res.json({msg:'um minuto para o fim do mundo'})
//     }
// })

module.exports = router