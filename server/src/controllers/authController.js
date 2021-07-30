const AuthService = require('../services/authService');
const apiError = require('../middlewares/apiError');

class AuthController {

  async registerUser(req, res, next) {
    const {firstName, lastName, email, password} = req.body;
    const user = {firstName, lastName, email, password};
    try {
      const userData = await AuthService.registerUser(user);
      res.json(userData)
    } catch (e) {
      next(apiError(500, 'Server Error!'))
    }
  }

  async loginUser(req, res, next) {
    try {

    } catch (e) {

    }
  }

  async logoutUser(req, res, next) {
    try {

    } catch (e) {

    }
  }

  async refreshToken(req, res, next) {
    try {

    } catch (e) {

    }
  }

}

module.exports = new AuthController();
