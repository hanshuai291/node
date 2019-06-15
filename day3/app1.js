var express = require("express")
var bodyParser =require("body-parser")
var app = express()

//配置使用art-template模板引擎
app.use("/public",express.static("./public/"))
//第一个参数表示，当渲染以.art结尾的文件时，使用art-template模板引擎
app.engine("html",require("express-art-template"))

//配置body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var comments =[{
    name:"张三",
    message :"今天天气不错",
    dateTime :"2019-6-2"
},
{
    name:"张三2",
    message :"今天天气不错",
    dateTime :"2019-6-2"
},
{
    name:"张三3",
    message :"今天天气不错",
    dateTime :"2019-6-2"
},
{
    name:"张三4",
    message :"今天天气不错",
    dateTime :"2019-6-2"
},
]
app.get("/",function(req,res){
    //render 默认路径在view文件夹里
    res.render("index.html",{
        comments:comments
    })
    // res.end("sad")
})
    .get("/post",function(req,res){
        res.render("post.html")
    })
    .post("/post",function(req,res){
        var com  = req.body
        console.log(com)
        com.dateTime ="2019-2-4"
        comments.unshift(com)
        res.redirect("/")
    })
    // .get("/comment",function(req,res){
    //     var com  = req.query
    //     console.log(com)
    //     com.dateTime ="2019-2-4"
    //     comments.unshift(com)
    //     res.redirect("/")
    // })

    .listen(3000,function(){
        console.log("server is running")
    })