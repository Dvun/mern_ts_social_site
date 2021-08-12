const UserService = require('../services/userService');
const UserDto = require('../dtos/userDto')

class UserController {

  async getUserProfile(req, res, next) {
    const {userId} = req.params
    try {
      const profile = await UserService.getUserProfile(userId)
      const profileDto = new UserDto(profile)
      res.status(200).json({...profileDto})
    } catch (e) {
      next(e)
    }
  }

}

module.exports = new UserController();
