const fs = require('fs');
const path = require('path');


class UploadService {

  async uploadAvatarFile(userFolder, userSubFolder) {
    let fileDir = `public/images`;

    // Create new folder by user ID if have no
    if (!fs.existsSync(`${fileDir}/${userFolder}`)) {
      fs.mkdirSync(`${fileDir}/${userFolder}`);
    }

    // Create new subFolder in user ID folder if have no
    if (!fs.existsSync(`${fileDir}/${userFolder}/${userSubFolder}`)) {
      return fs.mkdirSync(`${fileDir}/${userFolder}/${userSubFolder}`);
    }

    // If already have a image file in subFolder, delete old and save new one
    if (userSubFolder !== 'post') {
      fs.readdir(`${fileDir}/${userFolder}/${userSubFolder}`, (err, files) => {
        if (err) throw err;
        for (const file of files) {
          fs.unlink(path.join(`${fileDir}/${userFolder}/${userSubFolder}`, file), err => {
            if (err) throw err;
          });
        }
      });
    }
  }

  uploadPostFile(folder, file) {

  }

  updatePostFile(folder, file) {

  }

  deletePostFile(folder, file) {

  }

}

module.exports = new UploadService()
