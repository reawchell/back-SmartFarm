const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const Profesor = require('../models/profesor.model')

const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').StractJWT

passport.use('signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'

}, async (emailExterno, passwordExterno, done)=>{
    try{
        const nuevo = await Profesor.create({
            email: emailExterno,
            password: passwordExterno,
            nombre: '',
            apellidos:'',
        })
        return done (null, nuevo)
    }catch(error){
        done(error,null)
    }
}
))