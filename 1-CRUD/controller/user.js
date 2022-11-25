const User = require('../models/User')

const getAllUser = async (req,res) =>{
    try {
        const users = await User.find()
        res.status(200).json(users)
        
    } catch (error) {
        res.send(500).json({msg:error})
    }
}
//create user
const createUser =async (req,res)=>{
    try {
        const user = await User.create(req.body)               
        console.log(req.body)
        res.status(201).json({user})
        
    } catch (error) {
        res.send(500).json({msg:error})
    }
    
}
//delete user
const deleteUser = async (req,res)=>{
    try {
        //console.log(req.params)
        const { id : userID } = req.params
        console.log(userID)
        const user = await User.findOneAndDelete({_id:userID})
        //const user = await User.findOneAndDelete({_id:'6380c6938708d4d6693a2d48'}) 
         if(!user){
             return res.status(404).json({msg:`No user with id : ${userID}`})
         }
        console.log('scess')
        res.status(200).json({user})
    } catch (error) {
        //console.log("error here")
        res.status(500).json({msg:error})
    }
}
//update user
const updateUser =async (req,res)=>{
    try {
        //const {id:userID} = req.params
        const user = await User.findOneAndUpdate({_id:userID},req.body,{
            new:true,
            runValidators:true,
        })
        if(!user){
            return res.status(404).json({msg:`No user with ID : ${userID}`})
        }
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

module.exports={
    getAllUser,
    createUser,
    deleteUser,
    updateUser,

}