import React from 'react';
import AppRoutes from '../components/AppRoutes';
import { ToastContainer } from 'react-toastify';
import './App.scss';

const App: React.FC = () => {

  return (
    <>
      <AppRoutes/>
      <ToastContainer autoClose={2000}/>
    </>
  );
};

export default App;
