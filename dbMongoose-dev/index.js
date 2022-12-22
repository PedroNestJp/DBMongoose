require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const DATABASE = process.env.DATABASE
const mongoose = require('mongoose')
const UserSchema = require("./src/models/user")
const ProdutosSchema = require("./src/models/produtos")
const EnderecoSchema = require("./src/models/enderecos")


app.use(express.json())

mongoose.connect(process.env.DATABASE)
.then(() => {(console.log("MongoDB funcionando")
)}).catch((e)=>{console.log(e)})

app.post('/user', async (req,res)=>{
    const User = new UserSchema(req.body) 
    const result = await User.save()
    console.log(result)
    res.send(result)

})

app.get('/user', async (req,res)=>{ 
    const user = await UserSchema.find()
    console.log(user)
    res.send(user)

})

app.post('/produtos', async (req,res)=>{
    const Produto = new ProdutosSchema(req.body) 
    const result = await Produto.save()
    console.log(result)
    res.send(result)

})

app.get('/produtos', async (req,res)=>{ 
    const result = await ProdutosSchema.find()
    console.log(result)
    res.send(result)

})

app.post('/enderecos', async (req,res)=>{
    const Enderecos = new EnderecoSchema(req.body) 
    const result = await Enderecos.save()
    console.log(result)
    res.send(result)

})

app.get('/enderecos', async (req,res)=>{ 
    const result = await EnderecoSchema.find()
    console.log(result)
    res.send(result)

})






app.listen(PORT, () => {
    console.log(`serviço rodando na porta: ${PORT} ✅`)
})