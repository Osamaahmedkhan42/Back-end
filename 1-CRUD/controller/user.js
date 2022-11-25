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
            "name":"osama1",
            "email":"abc1@test",
            "password":"testing"
        }
        )
        console.log(req.body)
        res.status(201).json({user})
        
    } catch (error) {
        res.send(500).json({msg:error})
    }
    
}
//delete user
const deleteUser = async (req,res)=>{
    try {
        //const { id : userID } = req.params
        //const user = await User.findOneAndDelete({_id:userID})
        const user = await User.findOneAndDelete({_id:'6380ca8a1ca61cec646554a5'}) 
        if(!user){
            return res.status(404).json({msg:`No user with id : ${userID}`})
        }
        res.status(200).json({user})
    } catch (error) {
        res.sendStatus(500).json({msg:error})
    }
}

module.exports={
    getAllUser,
    createUser,
    deleteUser,

}