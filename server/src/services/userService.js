const UserModel = require('../models/userModel');
const ApiError = require('../middlewares/apiError');

class UserService {

  async getMyProfile(userId) {
    console.log(userId);
    const profile = await UserModel.findById(userId);
    if (!profile) throw ApiError.BadRequest('Profile not found!')
    return profile
  }

}

module.exports = new UserService();
