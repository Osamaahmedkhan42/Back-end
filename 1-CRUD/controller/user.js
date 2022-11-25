const User = require('../models/User')

const getAllUser = async (req,res) =>{
    try {
        const users = await User.find({})
        res.status(200).json(users)
        
    } catch (error) {
        res.send(500).json({msg:error})
    }
}
//create user
const createUser =async (req,res)=>{
    try {
        //const user = await User.create(req.body)
        const user = await User.create({
            "name":"osama",
            "email":"abc@test",
            "password":"testing"
        }
        )
        console.log(req.body)
        res.status(201).json({user})
        
    } catch (error) {
        res.send(500).json({msg:error})
    }
    
}

module.exports={
    getAllUser,
    createUser,

}