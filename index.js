require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const server = express()
const cors = require('cors')
const { MONGO_URL, PORT } = process.env;

const usuarioRoutes = require('./routes/usuario.routes')
const especieRoutes = require('./routes/especie.routes')
const ejemplarRoutes = require('./routes/ejemplar.routes')
const direccionRoutes = require('./routes/direccion.routes')

const router = express.Router()

//const cadenaConexio = 'mongodb+srv://reaw:9KKlU09gJC8ZUl1O@cluster0.ilywd9z.mongodb.net/smartFarm'
const cadenaConexio = MONGO_URL

mongoose.connect(cadenaConexio)
const database = mongoose.connection

database.on('error', (error)=>{
    console.log(`ha ocurrido un error`)
})
database.on('connected',()=>{
    console.log('Ha conectado a Mongo Atlas repitiendo clase!!')

})
server.use(express.json())

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

server.use(cors({
    origin: "*",
    credentials: true
}))

server.set("secretKey", "olaquetl1!")

server.use('/', router)

server.use('/usuarios',usuarioRoutes)
server.use('/ejemplar',ejemplarRoutes)    
server.use('/especies',especieRoutes)
server.use('/direcciones',direccionRoutes)


server.listen(PORT, ()=>{
    console.log(`servidor online en puerto 4000`)
})