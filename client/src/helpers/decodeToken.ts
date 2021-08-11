import jwtDecode from 'jwt-decode';
import {IUser} from '../interfaces/interfaces';

export const decodeToken = async (token: string) => {
  const data: IUser = await jwtDecode(token);
  return {
    coverPicture: data.coverPicture,
    email: data.email,
    firstName: data.firstName,
    followers: data.followers,
    followings: data.followings,
    lastName: data.lastName,
    profilePicture: data.profilePicture,
    userName: data.userName,
    _id: data._id,
  }
};
