export interface IUser {
  id: number
  profilePicture: string
  firstName: string
  lastName: string
}

export interface IPost {
  id: number
  desc?: string
  photo: string
  date: string
  userId: number
  like: number
  comment: number
}