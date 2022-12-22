const dotenv =require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT
const DATABASE = process.env.DATABASE


app.use(express.json)

mongoose.connect(process.env.DATABASE)
.then(() => {(console.log("MongoDB funcionando")
)}).catch((e)=>{console.log(e)})


const produtoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: String,
    price: { type: String, required: true},
})


app.get('/', (req,res)=>{res.send(produtoSchema)})


app.post('/produtos', async (req,res)=>{
    const produto = new Produto(req.body)
    const retorno = await produto.save(produto)
    console.log(produto)
    res.send('O produto foi cadastrado com sucesso ✔')
})

app.get('/produtos', async (req, res) =>{
    const produtos = await mongoose.produto.find()
    res.send(produtos)
})


//const produtoModel = mongoose.model('produto', produtoSchema)


app.listen(PORT, () => {
    console.log(`⚡ O Serviço está sendo executado ${PORT}`)
})
