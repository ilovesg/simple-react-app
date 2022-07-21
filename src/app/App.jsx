import React from 'react';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import AppRouter from './AppRouter/AppRouter';

function App() {
  return (
    <>
      <ToastContainer />
      <AppRouter />
    </>
  );
}

export default App;
