const express = require("express")
const cors = require("cors")
const body_parse = require("body-parser")
const path = require("path")

const app = express()
const port = 8081


app.use(cors())
app.use(body_parse.json())


app.get("/",
    (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req)


        res.send("Finaliza")
    }
)





app.listen(port, 
    ()=>{
        console.log("Subio el app en el puerto "+port)
    }
)
