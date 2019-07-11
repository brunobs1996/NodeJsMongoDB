//Requirements(imports)
const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')


//Iniciando APP
const app = express()
app.use(express.json())

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi-rockeatseat', {
    useNewUrlParser: true
})

requireDir('./src/models/')

//Rotas
app.use('/api', require('./src/routes'))

app.listen(3000)  


const testes = []

testes.forEach(element => {
    console.log(element)    
});