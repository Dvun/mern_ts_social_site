import React, {useEffect} from 'react';
import AppRoutes from '../components/AppRoutes';
import './App.scss';
import {ToastContainer} from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';

let localUser = JSON.parse(localStorage.getItem('user') as string);
let accessToken: string | null = localStorage.getItem('accessToken');

const App: React.FC = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(({authSlice}: RootState) => authSlice);

  useEffect(() => {
    if (localUser && accessToken) {
    } else {
      return
    }
  }, [dispatch, isLoading]);

  return (
    <>
      <AppRoutes/>
      <ToastContainer autoClose={2500}/>
    </>
  );
};

export default App;
