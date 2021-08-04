const AuthService = require('../services/authService');
const apiError = require('../middlewares/apiError');

class AuthController {

  async registerUser(req, res, next) {
    const {firstName, lastName, email, password} = req.body;
    const user = {firstName, lastName, email, password};
    try {
      await AuthService.registerUser(user);
      res.status(200).json({message: 'User registered!'});
    } catch (e) {
      next(e)
    }
  }

  async loginUser(req, res, next) {
    const {email, password} = req.body;
    try {
      const user = await AuthService.loginUser(email, password);
      res.status(200).json(user);
    } catch (e) {
      next(apiError(500, 'Server Error!'));
    }
  }

  async logoutUser(req, res, next) {
    const {userId} = req.body;
    try {
      await AuthService.logoutUser(userId);
      res.status(200).json('Logged out!')
    } catch (e) {
      next(apiError(500, 'Server Error!'));
    }
  }

  async refreshToken(req, res, next) {
    try {

    } catch (e) {

    }
  }

}

module.exports = new AuthController();
