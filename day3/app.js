var express = require("express")
var app = express()
app
    .get("/",function(req,res){
    res.send("hello express!")
})
    .get("/about",function(req,res){
    res.send("你好")
})
    // 开放资源
    .use("/node_modules",express.static("./node_modules/"))
    .listen(3000,function(){
        console.log("running")
    })