 function check1(req,res,next){
    console.log('este CHECK1 no hizo nada')
    next() 

   
 }

function check2(req,res,next){
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

function esModificacionAceptada(req,res,next){
    if(req.body.esAdmin){
        res.status(403)
        res.json({msg:'Sin Permisos'})
    }
    else{
        next()
    }
}


    module.exports = {
        check1,
        check2,
        // esCifValido,
        esModificacionAceptada
    }
 