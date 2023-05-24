const express = require('express')
const mongoose = require('mongoose')
const server = express()
const cors = require('cors')

server.use(cors())
const alumnoRoutes = require('./routes/alumno.routes')
const asignaturaRoutes = require('./routes/asignatura.routes')
const profesorRoutes = require('./routes/profesor.routes')
const direccionRoutes = require('./routes/direccion.routes')

const router = express.Router()

const cadenaConexio = 'mongodb+srv://reaw:9KKlU09gJC8ZUl1O@cluster0.ilywd9z.mongodb.net/universidad'
mongoose.connect(cadenaConexio)
const database = mongoose.connection

database.on('error', (error)=>{
    console.log(`ha ocurrido un error`)
})
database.on('connected',()=>{
    console.log('Ha conectado a Mongo Atlas repitiendo clase!!')

})
server.use(express.json())

server.use('/', router)

server.use('/alumnos',alumnoRoutes)
server.use('/profesores',profesorRoutes)    
server.use('/asignatura',asignaturaRoutes)
server.use('/direcciones',direccionRoutes)


server.listen(4000, ()=>{
    console.log(`servidor online en puerto 4000`)
})