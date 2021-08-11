import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserState} from './interfaces';
import {IUser} from '../../interfaces/interfaces';

const initialState: IUserState = {
  myProfile: null,
  userProfile: null,
  isLoading: false,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {

    getMyProfile(state, action: PayloadAction<IUser>) {
      state.myProfile = action.payload
    },

    getUserById(state, action: PayloadAction) {

    },

    fetchData(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    }

  }
})

export default userSlice.reducer
export const {
  fetchData,
  getMyProfile,
  getUserById
} = userSlice.actions
