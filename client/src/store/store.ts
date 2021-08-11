import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import rootState from './rootState'

const store = configureStore({
  reducer: rootState,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof rootState>

export default store
