var http = require("http")

var server =http.createServer()

server.on("request",function(req,res){
    console.log("成功接到请求，地址是：" + req.url)

    if(req.url==="/"){
        res.end("Index Page")
    }
    if(req.url==="/products"){
        var pdts = [
            {
                name:"apple",
                price:8888,
            },
            {
                name:"xiaomi",
                price:8888,
            },
            {
                name:"huawei",
                price:8888,
            }
        ]
        res.end(JSON.stringify(pdts))
    }
    else{
        res.end("呵呵")
    }
})

server.listen(3000,function(){
    console.log("服务器启动成功了，可以通过 http://127.0.0.1:3000 访问")
})