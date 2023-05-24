const express = require("express");
const router = express.Router();
const {
  obtenerTdos,
  crear,
  apagar,
  cambiar,
  modificar,
} = require("../controllers/profesor.controller");



router.get("/", async (req, res) => {
  try {
    const resultado = await obtenerTdos()
    res.json(resultado)
  } catch (error) {
    res.status(500)
    res.json({ msg: "Há ocurrido un fallo" })
  }
})

router.post("/", async (req, res) => {
  try {
    const nuevoProfesor = crear(req.body)
    res.json(nuevoProfesor);
  } catch (error) {
    res.status(500);
    res.json({ msg: "Há ocurrido un fallo" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await apagar(req.params.id)
    res.json({ msg: "Eliminado!" })
  } catch (error) {
    res.status(500)
    res.json({ msg: "Há ocurrido un fallo" })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const resultado = cambiar(req.params.id, req.body)
    res.json(resultado);
  } catch (error) {
    res.status(500);
    res.json({ msg: "Há ocurrido un fallo" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await modificar(req.params.id, req.body)
    res.json({ msg: "AINDA É CEDO, MÁS É DOMINGO" });
  } catch (error) {
    res.status(500);
    res.json({ msg: "Há ocurrido un fallo" });
  }
});

module.exports = router;
