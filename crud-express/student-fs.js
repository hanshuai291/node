/**
 * 数据文件操作模块
 * 职责：操作文件中的数据，只处理数据
 */
var fs = require("fs")

var dbPath ="./db.json"
/**
 * 获取所有学生列表
 */
exports.findAll = function(callback){
    fs.readFile(dbPath,"utf8",function(err,data){
        if(err){
            return callback(err)
        }
        callback(null,JSON.parse(data).students)
    })
}

exports.findById =function(id,callback){
    fs.readFile(dbPath,"utf8",function(err,data){
        if(err){
        return callback(err)
    }
    let students = JSON.parse(data).students
    var result =students.find(item =>{
        return item.id ===id
    })
    callback(null,result)
})
}

/**
 * 添加保存学生
 */
exports.save = function(student,callback){
    fs.readFile(dbPath,"utf8",function(err,data){
        if(err){
            return callback(err)
        }
        var students =JSON.parse(data).students
        //创建id
        student.id = students[students.length - 1].id + 1
        //将用户的数据添加近数组
        students.push(student)
        //将对象转为字符串
        var fileData = JSON.stringify({
            students:students
        })
        fs.writeFile(dbPath,fileData,function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}

/**
 * 更新学生
 */
exports.update = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
      if (err) {
        return callback(err)
      }
      var students = JSON.parse(data).students
  
      // 注意：这里记得把 id 统一转换为数字类型
      student.id = parseInt(id)
  
      // 你要修改谁，就需要把谁找出来
      // EcmaScript 6 中的一个数组方法：find
      // 需要接收一个函数作为参数
      // 当某个遍历项符合 item.id === student.id 条件的时候，find 会终止遍历，同时返回遍历项
      var stu = students.find(function (item) {
        return item.id === student.id
      })
  
      // 这种方式你就写死了，有 100 个难道就写 100 次吗？
      // stu.name = student.name
      // stu.age = student.age
  
      // 遍历拷贝对象
      for (var key in student) {
        stu[key] = student[key]
      }
  
      // 把对象数据转换为字符串
      var fileData = JSON.stringify({
        students: students
      })
  
      // 把字符串保存到文件中
      fs.writeFile(dbPath, fileData, function (err) {
        if (err) {
          // 错误就是把错误对象传递给它
          return callback(err)
        }
        // 成功就没错，所以错误对象是 null
        callback(null)
      })
    })
  }

/**
 * 删除学生
 */
exports.delete =function(){
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
          return callback(err)
        }
        var students = JSON.parse(data).students
        var deleteId =students.findIndex(item =>{
            item.id === parseInt(students.id)
        })
        students.splice(deleteId,1)

          // 把对象数据转换为字符串
        var fileData = JSON.stringify({
        students: students
      })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
              // 错误就是把错误对象传递给它
              return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
          })

    })
}