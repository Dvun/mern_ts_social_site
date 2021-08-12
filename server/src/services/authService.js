const UserModel = require('../models/userModel');
const TokenModel = require('../models/tokenModel');
const bcrypt = require('bcrypt');
const TokenService = require('../services/tokenService');
const ApiError = require('../middlewares/apiError');
const UserDto = require('../dtos/userDto')

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
    const userDto = new UserDto(user)
    const token =  await TokenService.generateToken({...userDto})
    return {accessToken: token}
  }

  async tokenRefresh(id) {
    const data = await TokenModel.findOne({userId: id})
    if (!data) throw ApiError.BadRequest('Token not found!')
    const user = await TokenService.verifyRefreshToken(data.refreshToken)
    const userDto = new UserDto(user)
    const accessToken = await TokenService.generateToken({...userDto})
    return {accessToken: accessToken}
  }

  async logoutUser(userId) {
    await TokenModel.findOneAndDelete({userId: userId});
  }

}

module.exports = new AuthService();
