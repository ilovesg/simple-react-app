import React from 'react';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Posts from './features/posts/Posts';
import Post from './features/posts/PostList/PostTable/PostItem/Post/Post';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Layout from './layout/Layout';

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Posts toast={toast} />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
