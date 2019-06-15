const express = require("express")
const router =express.Router()
var User =require("./models/user")


router.get('/',(req,res)=>{
    res.render("index.html")
})

      .get("/login",(req,res)=>{
        res.render("login.html")
    })

      .post("/login",(req,res)=>{

      })

      .get("/register",(req,res)=>{
        res.render("register.html")
    })

      .post("/register",(req,res)=>{
        var body = req.body
        User.findOne({
          $or: [{
              email: body.email
            },
            {
              nickname: body.nickname
            }
          ]
        }, function (err, data) {
          if (err) {
            return res.status(500).json({
              success: false,
              message: '服务端错误'
            })
          }
          // console.log(data)
          if (data) {
            // 邮箱或者昵称已存在
            return res.status(200).json({
              err_code: 1,
              message: 'Email or nickname aleady exists.'
            })
            return res.send(`邮箱或者密码已存在，请重试`)
          }
      
          // 对密码进行 md5 重复加密
          body.password = md5(md5(body.password))
      
          new User(body).save(function (err, user) {
            if (err) {
              return res.status(500).json({
                err_code: 500,
                message: 'Internal error.'
              })
            }
      
            // 注册成功，使用 Session 记录用户的登陆状态
            req.session.user = user
      
            // Express 提供了一个响应方法：json
            // 该方法接收一个对象作为参数，它会自动帮你把对象转为字符串再发送给浏览器
            res.status(200).json({
              err_code: 0,
              message: 'OK'
            })
      
            // 服务端重定向只针对同步请求才有效，异步请求无效
            // res.redirect('/')
          })
        })
      })
      
      router.get('/logout', function (req, res) {
        // 清除登陆状态
        req.session.user = null
      
        // 重定向到登录页
        res.redirect('/login')  
    })
    

module.exports = router