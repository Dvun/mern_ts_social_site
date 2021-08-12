import {IUser} from '../../interfaces/interfaces';

export interface IUserState {
  isLoading: boolean;
  profile: IUser | null;
  error: string | null;
}
