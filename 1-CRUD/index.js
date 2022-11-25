const express = require('express')
const connectDB = require('./db/connect')
const app = express()
require('dotenv').config()
const port = 3000
const dbkey= process.env.dbkey

app.use(express.json())
//
const {getAllUser,createUser,deleteUser,updateUser} = require('./controller/user')
//

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//
app.get('/get', getAllUser)
app.post('/create',createUser)
app.delete('/delete/:id',deleteUser)
app.patch('/update/:id',updateUser)
app.post('/test',(req,res)=>{
  res.send(req.body)
  console.log(req.body)
})

//
//app.listen(port, () => {
//  console.log(`Example app listening on port ${port}`)
//})
//
const start = async ()=>{
  try {

    await connectDB(dbkey)
    app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
    })   
  } catch (error) {
    console.log(error)
  }
}
start()