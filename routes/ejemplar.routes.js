const express = require("express");
const router = express.Router();
const ejemplarController = require('../controllers/ejemplar.controller')
// const especieController = require('../controllers/especie.controller')

// const {
//   obtenerTdos,
//   crear,
//   apagar,
//   cambiar,
//   modificar,
// } = require("../controllers/ejemplar.controller");

router.get("/", async (req, res) => {
  try {
    const resultado = await ejemplarController.obtenerTdos()
    res.json(resultado)
  } catch (error) {
    res.status(500)
    res.json({ msg: "Há ocurrido un fallo" })
  }
})

router.post("/", async (req, res) => {
  try {
    const nuevoEjemplar = await ejemplarController.crear(req.body)
    res.json(nuevoEjemplar);
  } catch (error) {
    res.status(500);
    res.json({ msg: "Haaaaa ocurrido un fallo" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await ejemplarController.apagar(req.params.id)
    res.json({ msg: "Eliminado!" })
  } catch (error) {
    res.status(500)
    res.json({ msg: "Há ocurrido un fallo" })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const resultado = ejemplarController.cambiar(req.params.id, req.body)
    res.json(resultado);
  } catch (error) {
    res.status(500);
    res.json({ msg: "Há ocurrido un fallo" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await ejemplarController.modificar(req.params.id, req.body)
    res.json({ msg: "AINDA É CEDO, MÁS É DOMINGO" });
  } catch (error) {
    res.status(500);
    res.json({ msg: "Há ocurrido un fallo" });
  }
});

module.exports = router;
