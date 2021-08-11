const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const UploadService = require('../services/uploadService')
const {uploadController} = require('../controllers/uploadController');
const AuthMiddleware = require('../middlewares/authMiddleware');


const storage = multer.diskStorage({
  async destination(req, file, cb) {
    let fileDir = `public/images`;
    const userFolder = req.body.userId
    const userSubFolder = req.body.fileForDir
    await UploadService.uploadAvatarFile(userFolder, userSubFolder)
    cb(null, `${fileDir}/${userFolder}/${userSubFolder}`);
  },
  filename(req, file, cb) {
    cb(null,
      `${req.body.userId}-${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = 'image/*';

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!');
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});



router.post('/upload', AuthMiddleware.verifyToken, upload.single('file'), uploadController);

module.exports = router;
