const jwt = require('jsonwebtoken');
const TokenModel = require('../models/tokenModel');
const ApiError = require('../middlewares/apiError');
const UserModel = require('../models/userModel');

class TokenService {

  async generateToken(user) {
    const userData = {
      profilePicture: user.profilePicture,
      coverPicture: user.coverPicture,
      followers: user.followers,
      followings: user.followings,
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
    };
    const accessToken = await jwt.sign(userData, process.env.JWT_ACCESS_SECRET, {expiresIn: '10m'});
    const refreshToken = await jwt.sign(userData, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});
    const tokenInModel = await TokenModel.findOne({userId: userData._id});
    if (!tokenInModel) await TokenModel.create({userId: userData._id, refreshToken});
    return accessToken;
  }

  async verifyToken(accessToken) {
    if (!accessToken) throw ApiError.NotAuthorized();
    const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
    if (!decoded) throw ApiError.NotAuthorized();
    const user = await UserModel.findById(decoded._id)
    return user
  }

  async verifyRefreshToken(data) {
    if (!data) throw ApiError.NotAuthorized();
    const decodedUser = jwt.verify(data, process.env.JWT_REFRESH_SECRET);
    if (!decodedUser) throw ApiError.NotAuthorized();
    const user = await UserModel.findById(decodedUser._id)
    return user
  }

}


module.exports = new TokenService();
