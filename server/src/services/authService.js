const UserModel = require('../models/userModel');
const TokenModel = require('../models/tokenModel');
const bcrypt = require('bcrypt');
const TokenService = require('../services/tokenService');
const ApiError = require('../middlewares/apiError');


class AuthService {

  async registerUser(userData) {
    const user = await UserModel.findOne({email: userData.email});
    if (user) {
      throw ApiError.BadRequest(`User with email ${userData.email} already registered!`)
    }
    const hashedPass = bcrypt.hashSync(userData.password, 10);
    await UserModel.create({...userData, password: hashedPass})
  }

  // async loginUser(email, password) {
  //   const user = await UserModel.findOne({email});
  //   if (!user) return apiError(400, `User not registered!`);
  //   const comparePass = bcrypt.compareSync(password, user.password);
  //   if (!comparePass) return apiError(400, `Email or password is not correct!`);
  //   const userData = {
  //     _id: user._id,
  //     firstName: user.firstName,
  //     lastName: user.lastName,
  //     email: user.email,
  //     password: user.password,
  //   };
  //   const token = await TokenService.generateToken(userData);
  //   return {
  //     user: userData,
  //     accessToken: token,
  //   };
  // }
  //
  // async logoutUser(userId) {
  //   const refreshToken = await TokenModel.findOneAndDelete({userId: userId});
  // }

}

module.exports = new AuthService();
