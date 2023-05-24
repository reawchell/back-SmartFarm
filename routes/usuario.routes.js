const express = require('express')
const router = express.Router()
//const {obtenerTdos, obtenerxDNI, crear} = require('../controllers/Usuario.controller')
const  usuarioController = require('../controllers/usuario.controller')
const direccionController = require('../controllers/direccion.controller')
const {check1, check2, esModificacionAceptada} = require('../middlewares/usuario.middlewares') //esCifValido


router.get("/", async (req,res)=>{
    try{
        const usuarios = await usuarioController.obtenerTodos()
        res.json(usuarios)
    }catch(error){
        res.status(500)
        res.json({msg: 'No tienes permisos para acceder'})
    }
})

router.get("/:cif", check1, async (req,res)=>{
    try{
        const Usuario = await usuarioController.obtenerxCIF(req.params.dni)
        res.json(Usuario)
    }catch(error){
        res.status(500)
        res.json({msg: 'Ha ocurrido un fallo 1'})
    }
})

router.post("/", async (req,res)=>{ //esCifValido,
    try {
        const nuevaDireccion = await direccionController.crear(req.body.direccion)
        req.body.direccion = nuevaDireccion._id
        const nuevoUsuario = await usuarioController.crear(req.body)
        res.json(nuevoUsuario)
    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({msg: 'ha ocurrido un fallo 2'})
    }
})
router.patch("/:id", esModificacionAceptada,async(req,res)=>{ //esCifValido,
    try {
        await usuarioController.modificar(req.params.id,req.body)
        res.json({msg: 'La información se ha actualizado correctamente'})
    } catch (error) {
        res.status(500)
        res.json({msg: 'Ha ocurrido un fallo'})
    }

    // router.delete("/:id", async (req, res) => {
    //     try {
    //       await apaga(req.params.id)
    //       res.json({ msg: "Eliminado!" })
    //     } catch (error) {
    //       res.status(500)
    //       res.json({ msg: "Ha ocurrido un fallo" })
    //     }
    //   })
      
})

module.exports = router