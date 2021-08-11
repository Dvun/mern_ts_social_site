import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './authSlice/authSlice'
import postSlice from './postSlice/postSlice';
import userSlice from './userSlice/userSlice';

const rootState = combineReducers({
  authSlice: authSlice,
  postSlice: postSlice,
  userSlice: userSlice
})


export default rootState
