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
    esModificacionAceptada
}
