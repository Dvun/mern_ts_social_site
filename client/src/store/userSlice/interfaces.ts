import {IUser} from '../../interfaces/interfaces';

export interface IUserState {
  isLoading: boolean;
  myProfile: IUser | null;
  userProfile: IUser | null;
  error: string | null;
}
