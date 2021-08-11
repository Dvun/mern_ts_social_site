const TokenService = require('../services/tokenService')
const ApiError = require('../middlewares/apiError')

class AuthMiddleware {

  async verifyToken(req, res, next) {
    try {
      let accessToken = req.headers.authorization && req.headers.authorization.split(' ')[1];
      req.user = await TokenService.verifyToken(accessToken)
      next()
    } catch (e) {
      next(ApiError.NotAuthorized())
    }
  }

}

module.exports = new AuthMiddleware();
