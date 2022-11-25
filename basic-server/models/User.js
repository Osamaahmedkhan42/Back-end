const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type: String,
    required : true},
    age:Number,
    email:{type: String,
        required : true},
    createdAt:Date,
    updatedAt:Date,
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies : [String],
    address: {
        street : String,
        city : String
    }

})


module.exports = mongoose.model("User",userSchema)