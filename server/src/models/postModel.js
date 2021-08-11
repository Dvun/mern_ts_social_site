const mongoose = require('mongoose')

const postModel = new mongoose.Schema({
  desc: {type: String},
  img: {type: String},
  userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true},
  like: {type: Number, default: 0},
  likes: {type: Array, default: []},
  comment: {type: Number, default: 0},
}, {timestamps: true})


const PostModel = mongoose.model('Post', postModel)
module.exports = PostModel
