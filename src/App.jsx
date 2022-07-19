import React from 'react';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import AppRouter from './app/AppRouter';

function App() {
  return (
    <div>
      <ToastContainer />
      <AppRouter />
    </div>
  );
}

export default App;
