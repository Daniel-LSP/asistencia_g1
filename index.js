const express= require ("express");
const app= express();

require("dotenv").config(

app.use(express.json())
const port = process.env.PORT // llamo el puerto

const port = process.env.PORT
  
app.listen(port,()=>{
    console.log(`Aplicacion ejecutandose en el puerto ${port}`)
})