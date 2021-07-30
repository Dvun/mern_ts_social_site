const UserModel = require('../models/userModel');
const apiError = require('../middlewares/apiError');
const bcrypt = require('bcrypt')


class AuthService {

  async registerUser(userData) {
    const user = await UserModel.findOne({email: userData.email})
    if (user) return apiError(400, `User with email ${userData.email} already exist!`)
    const hashedPass = bcrypt.hashSync(userData.password, 10)
    return await UserModel.create({...userData, password: hashedPass})
  }

  async loginUser(email, password) {

  }

}

module.exports = new AuthService()
