//Requerimos la dependencia de jsonwebtoken;
const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario.model")
// const HTTPSTATUSCODE = require("../utils/httpStatusCode");

const isAuth = async (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.json({
            status: 401,
            message: "Acceso no autorizado",
            data: null,
        });
    }

    const splits = authorization.split(" ");
    if (splits.length != 2 || splits[0] != "Bearer") {
        return res.json({
            status: 400,
            message: "Token no válido",
            data: null,
        });
    }

    const jwtString = splits[1];

    try {
        const token = jwt.verify(jwtString, req.app.get("secretKey"));
        const authority = {
            id: token.id,
            email: token.email,
        };

        const usuario = await Usuario.findById(authority.id);
        if (!usuario) {
            return res.status(401).json({
                status: 401,
                message: "Acceso no autorizado",
                data: null,
            });
        }

        req.authority = authority;
        next();
    } catch (error) {
        return res.status(401).json({
            status: 401,
            message: "Acceso no autorizado",
            data: null,
        });
    }
};

module.exports = { isAuth }