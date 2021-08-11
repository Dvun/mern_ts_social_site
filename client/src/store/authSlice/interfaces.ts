import {IUser} from '../../interfaces/interfaces';

export interface IAuthState {
  isAuth: boolean;
  isLoading: boolean;
  user: IUser | null;
  success: string | null;
  error: string | null;
}
