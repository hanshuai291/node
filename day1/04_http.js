var http = require("http")

var server = http.createServer()

server.on("request",function(){
    console.log("受到客户端的请求了")
})


server.listen(3000,function(){
    console.log("服务器启动成功了，可以通过 http://127.0.0.1:30 访问")
})