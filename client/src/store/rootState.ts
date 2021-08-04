import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './authReducer/authReducer'

const rootReducer = combineReducers({
  authSlice
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
