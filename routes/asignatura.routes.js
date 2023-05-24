
const express = require('express')
const router = express.Router()
const {obtenerTdos, crear, apagar} = require('../controllers/asignatura.controller')
//const { crear } = require('../controllers/alumno.controller')

router.get('/', async(req,res)=>{
    try{
        const asignaturas = await obtenerTdos()
        res.json(asignaturas)
    }catch(error){
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'})
    }

})

router.post('/', async (req,res)=>{
    try{
       //console.log(req.body)
        const nuevaAsignatura = await crear(req.body)
        res.json(nuevaAsignatura)
    }catch (error){
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'}) 
    }
})

router.delete('/:id', async (req,res)=>{
    try {
        //await Asignatura.deleteOne({_id: req.params.id})
       const resultado = await apagar(req.params.id)
        res.json({msg: 'result'})
    } catch (error) {
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'}) 
    }
})

module.exports = router