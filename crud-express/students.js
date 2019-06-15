var mongoose =require("mongoose")
var express =require("express")
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

module.exports = mongoose.model("Student",{

        name:{
            type:String,
            required:true
        },
        gender:{
            type:Number,
            enum:[0,1],
            default:0
        },
        hobbies: {
            type: String
          }

})