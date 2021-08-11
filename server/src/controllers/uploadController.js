const UserModel = require('../models/userModel');
const ApiError = require('../middlewares/apiError');

exports.uploadController = async (req, res, next) => {
  const {file, body: {userId, fileForDir}} = req;
  try {
    if (fileForDir === 'avatar') {
      await UserModel.findByIdAndUpdate({_id: userId}, {profilePicture: file.path});
    }
    if (fileForDir === 'cover') {
      await UserModel.findByIdAndUpdate({_id: userId}, {coverPicture: file.path});
    }
    res.status(200).json({message: 'Profile updated!'});
  } catch (e) {
    next(e);
  }
};
