const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const usuarioSchema = new mongoose.Schema({
  empresa: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  responsable: {
    required: true,
    type: String,
  },
  cif: {
    required: true,
    type: String,
  },
  // esAdmin:{
  //     type: Boolean,
  // },

  telefono: {
    required: true,
    type: String,
  },

  password: {
    required: true,
    type: String,
  },

  rol: {
    type: String,
    required: true,
    default: "empleado"
  },
  direccion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Direccion",
    required: true,
  },

});


usuarioSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

module.exports = mongoose.model("Usuario", usuarioSchema);
