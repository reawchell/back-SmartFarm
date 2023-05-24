 function check1(req,res,next){
    console.log('este CHECK1 näo faz nada')
    next() 

   
 }

function check2(req,res,next){
    console.log('esta pasando por el check 2')
    res.status(403)
    res.json(' Você nao pode entrar aqui')
}

function esDniValido(req,res,next){
    if(req.body.dni .length > 9){
        res.status(400)
        res.json({msg:'El dni o es correcto' })
    }
    else{
        next()
    }
}

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
        esDniValido,
        esModificacionAceptada
    }
 