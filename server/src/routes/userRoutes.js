const router = require('express').Router()
const UserController = require('../controllers/userController')
const AuthMiddleware = require('../middlewares/authMiddleware');

router.get('/myProfile/:userId', AuthMiddleware.verifyToken, UserController.getMyProfile)

module.exports = router
