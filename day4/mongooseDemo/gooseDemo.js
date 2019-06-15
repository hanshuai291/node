const mongoose =require("mongoose")
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

mongoose.set('useFindAndModify', false);
// var userSchema =new Schema({
// })

const user =mongoose.model("user", {userName:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
email:{
    type:String
}})

var admin =new user({
    userName:"hanshuai",
    password:"lano.1",
    email:"asdf@qewr.com"
})

//  * 查询数据
//  */
user.findOne({
    password:"lano.1"
},function(err,data){
    if(err){
        console.log(err)
    }
    console.log(data)
 })
/**
 * 删除数据
 */
// user.deleteOne({ userName: 'hanshuai' }, function (err) {
//     if (err) return handleError(err)
// })

/**
 * 更新数据
 */

 user.findByIdAndUpdate("5cf499f40625e128d8678495",{
     userName:"xxxx"}
     ,function(err){
     if(err){
     console.log(err)
    }
     console.log("成功")
 })