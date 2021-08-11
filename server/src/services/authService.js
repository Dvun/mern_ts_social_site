const UserModel = require('../models/userModel');
const TokenModel = require('../models/tokenModel');
const bcrypt = require('bcrypt');
const TokenService = require('../services/tokenService');
const ApiError = require('../middlewares/apiError');

class AuthService {

  async registerUser(userData) {
    const userEmail = await UserModel.findOne({email: userData.email});
    if (userEmail) {
      throw ApiError.BadRequest(`User with email ${userData.email} already registered!`)
    }
    const userName = await UserModel.findOne({userName: userData.userName});
    if (userName) {
      throw ApiError.BadRequest(`Username is already registered, think about new one!`)
    }
    const hashedPass = bcrypt.hashSync(userData.password, 10);
    await UserModel.create({...userData, password: hashedPass})
  }

  async loginUser(email, password) {
    const user = await UserModel.findOne({email});
    if (!user) throw ApiError.BadRequest(`User not registered!`);
    const comparePass = bcrypt.compareSync(password, user.password);
    if (!comparePass) throw ApiError.BadRequest(`Email or password is not correct!`);
    const userData = {
      _id: user._id,
      email: user.email,
    };
    const token = await TokenService.generateToken(userData);
    return {
      user: user,
      accessToken: token,
    };
  }

  async refreshToken(userData) {
    const token = await TokenModel.findOne({userId: userData._id})
    if (!token) throw ApiError.BadRequest('Token not found!')
    const currentUser = await UserModel.findById(userData._id)
    if (!currentUser) throw ApiError.BadRequest('User not found!')
    const user = await TokenService.verifyRefreshToken(token)
    const accessToken = await TokenService.generateToken(userData)
    return {
      user: currentUser,
      accessToken
    }
  }

  async logoutUser(userId) {
    await TokenModel.findOneAndDelete({userId: userId});
  }

}

module.exports = new AuthService();
