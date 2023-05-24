const express = require('express')
const router = express.Router()
//const {obtenerTdos, obtenerxDNI, crear} = require('../controllers/alumno.controller')
const { obtenerTdos, obtenerxDNI, crear, modificar } = require('../controllers/alumno.controller')
const {check1, check2, esDniValido, esModificacionAceptada} = require('../middlewares/alumno.middlewares')


router.get("/", async (req,res)=>{
    try{
        const alumnos = await obtenerTdos()
        res.json(alumnos)
    }catch(error){
        res.status(500)
        res.json({msg: 'Você nao pode passar daqui'})
    }
})

router.get("/:dni", check1, async (req,res)=>{
    try{
        const alumno = await obtenerxDNI(req.params.dni)
        res.json(alumno)
    }catch(error){
        res.status(500)
        res.json({msg: 'Ha ocurrido un fallo'})
    }
})

router.post("/",esDniValido, async (req,res)=>{
    try {
        const nuevoAlumno = await crear(req.body)
        res.json(nuevoAlumno)
    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({msg: 'há ocurrido un fallo'})
    }
})
router.patch("/:id",esDniValido, esModificacionAceptada,async(req,res)=>{
    try {
        await modificar(req.params.id,req.body)
        res.json({msg: 'Sao quase dez da noite, NINGUEM MERECE'})
    } catch (error) {
        res.status(500)
        res.json({msg: 'Ha ocurrido un fallo'})
    }

    router.delete("/:id", async (req, res) => {
        try {
          await apagar(req.params.id)
          res.json({ msg: "Eliminado!" })
        } catch (error) {
          res.status(500)
          res.json({ msg: "Há ocurrido un fallo" })
        }
      })
      
})

module.exports = router