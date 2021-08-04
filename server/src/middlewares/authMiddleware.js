const jwt = require('jsonwebtoken');

class AuthMiddleware {

  async verifyToken(req, res, next) {
    try {
      const accessToken = req.headers.authorization && req.headers.authorization.split(' ')[1];
      if (!accessToken) return res.status(401).json('Not authorized, token failed!');
      const decodedToken = await jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
      req.user = decodedToken;
      next();
    } catch (e) {
      res.status(401).json('Not authorized, token failed!');
    }
  }

}

module.exports = new AuthMiddleware();
