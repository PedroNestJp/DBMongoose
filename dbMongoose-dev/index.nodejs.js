const { MongoClient } = require("mongodb");
require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const AddressesRoutes = require("./src/routes/addresses.routes")
const UserRoutes = require("./src/routes/users.routes")
const ProdutosRoutes = require("./src/routes/produtos.routes")
const cors = require('cors')


app.use(express.json())
app.use(cors())

const url = "mongodb+srv://pedronest:pedronest@pedronest.8ao18d8.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);



      const productDocument = async () =>{
            const dbName = "test"
            const db = client.db(dbName)
            const col = db.collection("Produtos")

            let productDocument = {
                nome: Nome,
                desc: Desc,
                preco: Preco
            }
            const response = await col.insertOne(productDocument)
            console.log(response.data)
            const myDoc = await col.findOne();
            // Print to the console
            console.log(myDoc);
} 
productDocument()

app.use('/usuarios', UserRoutes)
app.use('/produtos', ProdutosRoutes)
app.use('/endereco', AddressesRoutes)

app.listen(PORT, () => {
    console.log(`serviço rodando na porta: ${PORT} ✅`)
})