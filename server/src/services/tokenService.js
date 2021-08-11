const jwt = require('jsonwebtoken');
const TokenModel = require('../models/tokenModel');
const ApiError = require('../middlewares/apiError');
const UserModel = require('../models/userModel');

class TokenService {

  async generateToken(payload) {
    const accessToken = await jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '10m'});
    const refreshToken = await jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});
    const tokenInModel = await TokenModel.findOne({userId: payload._id});
    if (!tokenInModel) await TokenModel.create({userId: payload._id, refreshToken});
    return accessToken;
  }

  async verifyToken(accessToken) {
    if (!accessToken) throw ApiError.NotAuthorized();
    const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
    if (!decoded) throw ApiError.NotAuthorized();
    const user = await UserModel.findById(decoded._id)
    return user
  }

  async verifyRefreshToken(token) {
    if (!token) throw ApiError.NotAuthorized();
    const user = jwt.verify(token.refreshToken, process.env.JWT_REFRESH_SECRET);
    if (!user) throw ApiError.NotAuthorized();
    return {
      user,
    };
  }

}


module.exports = new TokenService();
