var fs = require("fs")
var express = require("express")
var Student = require("./student")


//创建一个路由容器
var router =express.Router()
router.get("/students",function(req,res){
    Student.find(function(err,students){
        if(err){
            return res.status(500).send("Server error")
        }
        res.render("index.html",{
            fruits :[
                "橘子",
                "苹果",
                "香蕉"
            ],
            students:students           
    })
        
    })

        

})
    .get("/students/new",function(req,res){
        res.render("new.html")

})
    .post("/students/new",function(req,res){
        //将数据保存到Json文件中用于持久化
        stu.save(req.body,function(err){
            if(err){
                return res.status(500).send("Server error")
            }
            res.redirect("/students")
        })
        
})
/**
 * 渲染编辑学生页面
 */
    .get("/students/edit",function(req,res){
        stu.findById(parseInt(req.query.id),function(err,student){
            if(err){
                return res.status(500).send("Server error")
            }
            res.render("edit.html",{
                student:student
            })
        })
})

    .post("/students/edit",function(req,res){
        stu.update(req.body,function(err){
            if(err){
                return res.status(500).send("Server error")
            }
        })
        res.redirect("/students")
})

    .get("/students/delete",function(req,res){
        stu.delete(req.body,function(err){
            if(err){
                return res.status(500).send("Server error")
            }
        })
        res.redirect("/students")

})


module.exports = router
// module.exports = function(app){
//     app.get("/students",function(req,res){

//         fs.readFile('./db.json',"utf8",function(err,data){
//             if(err){
//                 return res.status(500).send("Server error")
//             }
//             console.log(data)
//             res.render("index.html",{
//                 fruits :[
//                     "橘子",
//                     "苹果",
//                     "香蕉"
//                 ],
//                 students:JSON.parse(data).students
//             })
//         })
       
//     })
//         .get("/students/new",function(req,res){
    
//     })
//         .get("/students/new",function(req,res){
    
//     })
//         .get("/students/new",function(req,res){
    
//     })
//         .get("/students/new",function(req,res){
    
//     })
// }


