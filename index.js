const express= require ("express");
const app= express();
require("dotenv").config()// llamo el puerto 


app.use(express.json())
const port = process.env.PORT // llamo el puerto

app.listen(port,()=>{
    console.log(`Aplicacion ejecutandose en el puerto ${port}`)
})