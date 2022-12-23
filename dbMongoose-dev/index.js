require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const mongoose = require('mongoose')
const AddressesRoutes = require("./src/routes/addresses.routes")
const UserRoutes = require("./src/routes/users.routes")
const ProdutosRoutes = require("./src/routes/produtos.routes")
const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DATABASE)
.then(() => {(console.log("MongoDB funcionando")
)}).catch((e)=>{console.log(e)})

app.use('/users', UserRoutes)
app.use('/produtos', ProdutosRoutes)
app.use('/produtos', AddressesRoutes)



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