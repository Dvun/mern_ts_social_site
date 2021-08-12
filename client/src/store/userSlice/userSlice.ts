import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserState} from './interfaces';
import {IUser} from '../../interfaces/interfaces';

const initialState: IUserState = {
  profile: null,
  isLoading: false,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {

    getUserById(state, action: PayloadAction<IUser>) {
      console.log('work');
      state.profile = action.payload
      state.isLoading = false
    },

    fetchUserAndData(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    }

  }
})

export default userSlice.reducer
export const {
  fetchUserAndData,
  getUserById
} = userSlice.actions
