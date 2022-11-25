const mongoose = require('mongoose')
const connectDB = (URI) => {
  return mongoose.connect(URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    }).then(()=>{
        console.log('Connected!!')
    }).catch((err)=>{
        console.log(err)
    });
}

module.exports = connectDB
