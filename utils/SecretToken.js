require("dotenv").config();
const jwt = require("jsonwebtoken");
const userModels = require("../models/usuario.model");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

module.exports.getUserFromToken = async (token) => {
  if (!token) {
    return ( null )
  }

  try {
    const data = await jwt.verify(token, process.env.TOKEN_KEY) 
        const user = await userModels.findById(data.id)
        if (user) return (user)
        else return (null)
  } catch (error) {
    console.log(error)
      return (null)
  }
}