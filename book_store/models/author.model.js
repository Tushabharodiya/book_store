let mongoose=require("mongoose")


let authorSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    dob:{
        type:String,
    },
    genre:{
        type:String,
    }
})


let author=mongoose.model("authorSchema",authorSchema)

module.exports=author;