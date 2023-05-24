const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const Usuario = require('../models/usuario.model')

const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').StractJWT

passport.use('signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'

}, async (emailExterno, passwordExterno, done)=>{
    try{
        const nuevo = await Usuario.create({
            email: emailExterno,
            password: passwordExterno,
            responsable: '',
        })

        return done (null, nuevo)
    }catch(error){
        done(error,null)
    }
}
))