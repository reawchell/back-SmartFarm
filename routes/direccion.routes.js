//const { modificar } = require('../controllers/alumno.controller')
const {crear, obtenerTdos, modificar} = require('../controllers/direccion.controller')

const express = require('express')
const router = express.Router()

router.get('/', async(req,res)=>{
    try{
        const direcciones = await obtenerTdos()
        res.json(direcciones)

    }catch(error){
        res.status(500)
        res.json({msn:'um minuto para o fim do mundo'})
    }
})

router.post('/', async(req,res)=>{
    try{
        const nueva = await crear(req.body)
        res.json(nueva)

    }catch(error){
        res.status(500)
        res.json({msg:'um minuto para o fim do mundo'})
    }
})

router.patch("/:id", async(req,res)=>{
    try {
        const result = modificar(req.params.id, req.body)
        res.json(result)

    }catch(error){
        res.status(500)
        res.json({msg:'toda minha vida em 60 segundos'})
    }
})

module.exports = router