import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Posts from './features/posts/Posts';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Container>
      <ToastContainer />
      <Routes>
        <Route index path="/" element={<Posts toast={toast} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
