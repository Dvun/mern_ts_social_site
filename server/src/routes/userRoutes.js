const router = require('express').Router()
const UserController = require('../controllers/userController')
const AuthMiddleware = require('../middlewares/authMiddleware');

router.get('/profile/:userId', AuthMiddleware.verifyToken, UserController.getUserProfile)

module.exports = router
