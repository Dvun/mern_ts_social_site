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
  userId: IUser
  likes: string[]
  comment: number
  createdAt: string
  updatedAt: string
}

export interface IUserLogin {
  email: string
  password: string
}

export interface IUserFromBackEnd {
  accessToken: string
  user: IUser
}
