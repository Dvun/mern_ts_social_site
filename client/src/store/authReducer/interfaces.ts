import {IUser} from '../../interfaces/interfaces';

export interface IAuthState {
  isAuth: boolean;
  isLoading: boolean;
  user: IUser;
  success: string | null;
  error: string | null;
}

export enum AuthActionTypes {
  REGISTER = 'REGISTER',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SET_SUCCESS = 'SET_SUCCESS',
  SET_ERROR = 'SET_ERROR'
}

export interface RegisterUserAction {
  type: AuthActionTypes.REGISTER;
  payload: string;
}

export interface LoginUserAction {
  type: AuthActionTypes.LOGIN;
  payload: IUser;
}

export interface SetIsUserLoginSuccessAction {
  type: AuthActionTypes.SET_SUCCESS;
  payload: string;
}

export interface SetIsUserLoginFailAction {
  type: AuthActionTypes.SET_ERROR;
  payload: string;
}

export type AuthAction = RegisterUserAction | LoginUserAction | SetIsUserLoginFailAction | SetIsUserLoginSuccessAction
