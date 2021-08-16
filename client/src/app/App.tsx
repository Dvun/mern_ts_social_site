import React, {useEffect} from 'react';
import AppRoutes from '../components/AppRoutes';
import './App.scss';
import {ToastContainer} from 'react-toastify';
import {useDispatch} from 'react-redux';
import AuthActions from '../store/authSlice/authActions'
import {decodeToken} from '../helpers/decodeToken';

let accessToken = JSON.parse(localStorage.getItem('accessToken') as string);

const App: React.FC = () => {
  const dispatch = useDispatch();



  useEffect(() => {
    if (accessToken) {
      async function getDataFromToken() {
        const userId = await decodeToken(accessToken)
        await dispatch(AuthActions.getMyProfile(userId))
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
