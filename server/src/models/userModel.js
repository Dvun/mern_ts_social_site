const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  userName: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  profilePicture: {type: String, default: "",},
  coverPicture: {type: String, default: "",},
  followers: {type: Array, default: []},
  followings: {type: Array, default: []},
  desc: {type: String, max: 50},
  city: {type: String, max: 50},
  from: {type: String, max: 50},
  relationship: {type: Number, enum: [1, 2, 3]},
}, {timestamps: true})


const UserModel = mongoose.model('User', userModel)
module.exports = UserModel
