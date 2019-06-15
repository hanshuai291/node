const express = require("express")
const path = require("path")
const router = require("./routers")
const app =express()
const bodyParser =require("body-parser")

app.engine("html",require("express-art-template"))
app.set("views",path.join(__dirname,"./views/"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.use(router)

app.use("/public",express.static(path.join(__dirname,"./public")))
   .use("/node_modules",express.static(path.join(__dirname,"./node_modules")))



    .listen(3000,()=>{
        console.log("server is running")
    })