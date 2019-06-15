var http = require("http")

var server = http.createServer()

server.on("request",function(request,response){
    //http://127.0.0.1:3000/ 后面的/是默认的
    console.log("受到客户端的请求了 ,请求路径是"+request.url)
    //response.write方法可以多次使用，但每次必须都要用end结尾 告诉客户端话说完了
    response.write("你好")
    response.write("asdjkf")
    response.end()
})


server.listen(3000,function(){
    console.log("服务器启动成功了，可以通过 http://127.0.0.1:30 访问")
})