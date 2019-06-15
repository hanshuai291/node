var fs = require('fs')

fs.writeFile("../data/hi.txt","你好",function(error){
    if(error){
        console.log("文件写入失败")
    }else{
        console.log("文件写入成功")
    }
})