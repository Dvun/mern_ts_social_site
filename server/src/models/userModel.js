const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
}, {timestamps: true})


const UserModel = mongoose.model('User', userModel)
module.exports = UserModel
