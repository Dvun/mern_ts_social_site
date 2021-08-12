module.exports = class UserDto {
  profilePicture;
  coverPicture;
  followers;
  followings;
  _id;
  firstName;
  lastName;
  userName;
  email;

  constructor(model) {
    this._id = model._id;
    this.firstName = model.firstName;
    this.lastName = model.lastName;
    this.userName = model.userName;
    this.email = model.email;
    this.profilePicture = model.profilePicture;
    this.coverPicture = model.coverPicture;
    this.followers = model.followers;
    this.followings = model.followings;
  }
};
