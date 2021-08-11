import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuthState} from './interfaces';
import {IUser} from '../../interfaces/interfaces';

const initialState: IAuthState = {
  isAuth: false,
  isLoading: false,
  user: null,
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

    userLogin(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload
      state.isAuth = action.payload !== null
    },

    fetchData(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },

    userIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload
    }
  }
})

export default authSlice.reducer
export const {
  userRegister,
  userLogin,
  fetchData,
} = authSlice.actions
