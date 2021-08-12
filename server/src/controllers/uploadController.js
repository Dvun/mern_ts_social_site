const UserModel = require('../models/userModel');
const UserDto = require('../dtos/userDto')
const ApiError = require('../middlewares/apiError');

exports.uploadController = async (req, res, next) => {
  const {file, body: {userId, fileForDir}} = req;
  try {
    if (fileForDir === 'avatar') {
      await UserModel.findByIdAndUpdate({_id: userId}, {profilePicture: file.filename});
    }
    if (fileForDir === 'cover') {
      await UserModel.findByIdAndUpdate({_id: userId}, {coverPicture: file.filename});
    }
    const user = await UserModel.findById(userId)
    const userDto = new UserDto(user)
    res.status(200).json({user: {...userDto}, message: 'Profile updated!'});
  } catch (e) {
    next(e);
  }
};
