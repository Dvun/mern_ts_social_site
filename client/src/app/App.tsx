import React, {useEffect} from 'react';
import AppRoutes from '../components/AppRoutes';
import './App.scss';
import {ToastContainer} from 'react-toastify';
import {useDispatch} from 'react-redux';
import {userLogin} from '../store/authSlice/authSlice';
import {decodeToken} from '../helpers/decodeToken';

let accessToken = JSON.parse(localStorage.getItem('accessToken') as string);

const App: React.FC = () => {
  const dispatch = useDispatch();



  useEffect(() => {
    if (accessToken) {
      async function getDataFromToken() {
        const user = await decodeToken(accessToken)
        dispatch(userLogin(user));
      }
      getDataFromToken()
    }
  }, [dispatch]);

  return (
    <>
      <AppRoutes/>
      <ToastContainer autoClose={2500}/>
    </>
  );
};

export default App;
