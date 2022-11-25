const mongoose = require('mongoose')

const connectDB = (URI) => {
  return mongoose.connect(URI, {

    useNewUrlParser: true, 
    
    useUnifiedTopology: true 
    
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });
}

module.exports = connectDB
