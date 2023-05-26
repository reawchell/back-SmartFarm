const express = require("express");
const router = express.Router();
const ejemplarController = require('../controllers/ejemplar.controller')
const especieController = require('../controllers/especie.controller')



router.get("/", async (req, res) => {
  try {
    if(req.query.especie){
      const resultado = await ejemplarController.obtenerPorEspecie(req.query.especie);
      res.json(resultado)
    }
    else{
      const resultado = await ejemplarController.obtenerTdos()
      res.json(resultado)
    }
    
  } catch (error) {
    res.status(500)
    res.json({ msg: "Ha ocurrido un error en el get" })
  }
})
router.get("/:id", async (req, res) => {
  try {
    const resultado = await ejemplarController.obtenerxId(req.params.id)
    res.json(resultado)
  } catch (error) {
    res.status(500)
    res.json({ msg: "Ha ocurrido un error en el get" })
  }
})

router.post("/", async (req, res) => {
  try {
    //const nuevoEspecie = await especieController.crear(req.body.especie)
    //const nuevoEjemplar = { ...req.body, especie: nuevoEspecie._id };
    const ejemplarCreado = await ejemplarController.crear(req.body);
    res.json(ejemplarCreado)
  } catch (error) {
    console.log(error)
    res.status(500)
    res.json({ msg: 'Ha ocurrido un error en el post' })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const ejemplarActualizado = await ejemplarController.editar(id, body);
    res.json(ejemplarActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ha ocurrido un error en la edición" });
  }
});
// router.put("/:id", async (req, res) => {
//   try {
//     const nuevoEspecie = await especieController.cambiar(req.body.especie)
//     const nuevoEjemplar = { ...req.body, especie: nuevoEspecie._id };
//     const ejemplarCreado = await ejemplarController.cambiar(nuevoEjemplar);
//     res.json(ejemplarCreado);
//   } catch (error) {
//     res.status(500);
//     res.json({ msg: "No funciona el put" });
//   }
// });

router.patch("/:id", async (req, res) => {
  try {
    await ejemplarController.modificar(req.params.id, req.body)
    res.json({ msg: "AINDA É CEDO, MÁS É DOMINGO" });
  } catch (error) {
    res.status(500);
    res.json({ msg: "Ha ocurrido un error en el patch" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await ejemplarController.borrar(req.params.id)
    res.json({ msg: "Eliminado!" })
  } catch (error) {
    res.status(500)
    res.json({ msg: "Ha ocurrido un error en el delete" })
  }
})


module.exports = router;
