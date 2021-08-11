const AuthService = require('../services/authService');

class AuthController {

  async registerUser(req, res, next) {
    const {firstName, lastName, userName, email, password} = req.body;
    const user = {firstName, lastName, userName, email, password};
    try {
      await AuthService.registerUser(user);
      res.status(200).json({message: 'User registered!'});
    } catch (e) {
      next(e);
    }
  }

  async loginUser(req, res, next) {
    const {email, password} = req.body;
    try {
      const user = await AuthService.loginUser(email, password);
      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }

  async logoutUser(req, res, next) {
    try {
      res.status(200).json('logout!')
    } catch (e) {
      next(e);
    }
  }

  async refreshToken(req, res, next) {
    const {userId} = req.body
    try {
      const user = await AuthService.tokenRefresh(userId);
      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }

}

module.exports = new AuthController();
