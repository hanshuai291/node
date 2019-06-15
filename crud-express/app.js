var express = require("express")

var router = require("./router")

var fs = require("fs")
var bodyParser =require("body-parser")

var app = express()

//配置中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// router(app)
app.use(router)



app.use("/public/", express.static("./public/"))
app.engine("html", require("express-art-template"))
    .listen(3000, function () {
        console.log("server is running")
    })

