const mongoose = require('mongoose')

const tokenModel = new mongoose.Schema({
  refreshToken: {type: String, required: true},
  userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true},
}, {timestamps: true})


const TokenModel = mongoose.model('Token', tokenModel)
