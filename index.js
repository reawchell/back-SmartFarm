const express = require('express')
const mongoose = require('mongoose')
const server = express()
const cors = require('cors')

server.use(cors())
const usuarioRoutes = require('./routes/usuario.routes')
const especieRoutes = require('./routes/especie.routes')
const ejemplarRoutes = require('./routes/ejemplar.routes')
const direccionRoutes = require('./routes/direccion.routes')

const router = express.Router()

//const cadenaConexio = 'mongodb+srv://reaw:9KKlU09gJC8ZUl1O@cluster0.ilywd9z.mongodb.net/smartFarm'
const cadenaConexio = 'mongodb+srv://eavellanet12:4PfUGvS6ypKrAJKF@universidad.wn4t1vb.mongodb.net/smartFarm'

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

server.use('/usuarios',usuarioRoutes)
server.use('/ejemplar',ejemplarRoutes)    
server.use('/especies',especieRoutes)
server.use('/direcciones',direccionRoutes)


server.listen(4000, ()=>{
    console.log(`servidor online en puerto 4000`)
})