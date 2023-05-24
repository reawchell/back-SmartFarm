
const express = require('express')
const router = express.Router()
const {obtenerTdos, crear, apagar} = require('../controllers/especie.controller')
//const { crear } = require('../controllers/alumno.controller')

router.get('/', async(req,res)=>{
    try{
        const especies = await obtenerTdos()
        res.json(especies)
    }catch(error){
        res.status(500)
        res.json({msg: 'Ha ocurrido un fallo 1'})
    }

})

router.post('/', async (req,res)=>{
    try{
       //console.log(req.body)
        const nuevaEspecie = await crear(req.body)
        res.json(nuevaEspecie)
    }catch (error){
        res.status(500)
        res.json({msg: 'Ha ocurrido un fallo 1'}) 
    }
})

router.delete('/:id', async (req,res)=>{
    try {
        //await Asignatura.deleteOne({_id: req.params.id})
       const resultado = await apagar(req.params.id)
        res.json({msg: 'result'})
    } catch (error) {
        res.status(500)
        res.json({msg: 'Ha ocurrido un fallo'}) 
    }
})

module.exports = router