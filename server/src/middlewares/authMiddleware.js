const TokenService = require('../services/tokenService')

class AuthMiddleware {

  async verifyToken(req, res, next) {
    try {
      const accessToken = req.headers.authorization && req.headers.authorization.split(' ')[1];
      req.user = await TokenService.verifyToken(accessToken)
      next()
    } catch (e) {
      next(e);
    }
  }

}

module.exports = new AuthMiddleware();
