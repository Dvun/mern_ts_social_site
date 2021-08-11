const UserService = require('../services/userService');

class UserController {

  async getMyProfile(req, res, next) {
    const {userId} = req.params
    try {
      const profile = await UserService.getMyProfile(userId)
      res.status(200).json(profile)
    } catch (e) {
      next(e)
    }
  }

}

module.exports = new UserController();
