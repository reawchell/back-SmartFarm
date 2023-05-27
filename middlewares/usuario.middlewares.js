const { getUserFromToken } = require("../utils/SecretToken");

async function estaLoggeado(req, res, next) {
    next();
    // const user = await getUserFromToken(req.query.token);
    // console.log(user)
    // if (user && user.rol === "empleado") {
    //   next();
    // } else {
    //   return res.status(403).json({msg: 'acceso denegado'});
    // }
  }
  
  async function isAdmin(req, res, next) {
    const user = await getUserFromToken(req.query.token);
    console.log(user);
    if (user && user.rol === "admin") {
      next();
    } else {
      return res.status(403).json({msg: 'acceso denegado'});
    }
  }

function esCif(req, res, next) {
    const idOrCif = req.params.id;
    // Verificar si es un CIF
    const isCif = /^[A-Z]\d{8}$/.test(idOrCif);
    if (isCif) {
        // Si es un CIF, establecer una propiedad en el objeto de solicitud para indicarlo
        req.esCif = true;
    } else {
        // Si no es un CIF, establecer la propiedad en falso
        req.esCif = false;
    }
    next();
}

function check1(req, res, next) {
    console.log('este CHECK1 no hizo nada')
    next()
}

function check2(req, res, next) {
    console.log('esta pasando por el check 2')
    res.status(403)
    res.json('No puedes entrar')
}

// function esCifValido(req,res,next){
//     if(req.body.cif .length > 9){
//         res.status(400)
//         res.json({msg:'El cif no es correcto' })
//     }
//     else{
//         next()
//     }
// }

// function estaLoggeado(req,res,next){
//     next()
    /*
    const token = req.query.token
    if(token){
        // validar que l token esta okay, que el usauario existe ...
        
         descifrar el token para sacar el _id del usuario
         buscar el usuario

         si hay usuario
            next()
         si no hay usuario
             res.status(403).json({msg: "token corrupto"})
        
        
        next()
    }
    else{
        res.status(403).json({msg: "no hay token"})
    }
    console.log('este es el token',token)
    }
*/

function esModificacionAceptada(req, res, next) {
    if (req.body.esAdmin) {
        res.status(403)
        res.json({ msg: 'Sin Permisos' })
    }
    else {
        next()
    }
}

module.exports = {
    check1,
    check2,
    // esCifValido,
    esModificacionAceptada,
    estaLoggeado,
    isAdmin,
    esCif
}
