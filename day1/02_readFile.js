var fs =require('fs')


fs.readFile("../data/hello.txt",function(error,data){
    if(error){
        console.log(文件读取失败了)
    }else{
        console.log(data.toString())
    }

})