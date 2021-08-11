export interface IUser {
  _id: string
  profilePicture: string
  coverPicture: string
  followers: []
  followings: []
  firstName: string
  lastName: string
  userName: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
}

export interface IUserData {
  firstName: string
  lastName: string
  userName: string
  email: string
  password: string
  repeatPassword: string
}

export interface IPost {
  _id: string
  desc?: string
  photo?: string
  date: string
  userId: string
  like: number
  comment: number
}

export interface IUserLogin {
  email: string
  password: string
}

export interface IAccessToken {
  accessToken: string
}

export interface IUserLoginData {
  accessToken: IAccessToken
  user: IUser
}
