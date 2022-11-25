const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    { name: 'string',
     email: 'string',
     password:'string'
     }
)

module.exports = mongoose.model('User',UserSchema)