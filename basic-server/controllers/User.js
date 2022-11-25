const mongoose = require('mongoose')
const User = require('../models/User')

const MONGO_URI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0"
mongoose.connect(MONGO_URI)
run()
async function run(){
    const user = new User({name:"osama",age:21})
    await user.save()
    console.log(user) 
}
//codo toremove

//
