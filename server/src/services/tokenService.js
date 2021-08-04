const jwt = require('jsonwebtoken');
const TokenModel = require('../models/tokenModel');

class TokenService {

  async generateToken(payload) {
    const accessToken = await jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'});
    const refreshToken = await jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});
    const tokenInModel = await TokenModel.findOne({userId: payload._id});
    if (!tokenInModel) {
      await TokenModel.create({userId: payload._id, refreshToken});
    }
    return accessToken;
  }

}


module.exports = new TokenService();
