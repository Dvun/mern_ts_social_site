import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthAction, AuthActionTypes, IAuthState, RegisterUserAction} from './interfaces';
import {IUser} from '../../interfaces/interfaces';

const initialState: IAuthState = {
  isAuth: false,
  isLoading: false,
  user: {} as IUser,
  success: null,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {

    userRegister(state, action: PayloadAction<string>) {
      state.success = action.payload
    },

    userLogin(state, action: PayloadAction<IUser>) {
      state.user = action.payload
    },

    fetchData(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    }
  }
})

export default authSlice.reducer
export const {
  userRegister,
  userLogin,
  fetchData
} = authSlice.actions
