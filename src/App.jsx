import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import Posts from './features/posts/Posts';

function App() {
  return (
    <Container>
      <ToastContainer />
      <Posts toast={toast} />
    </Container>
  );
}

export default App;
