import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import Posts from '../features/posts/Posts';
import Post from '../features/posts/PostList/PostTable/PostItem/Post/Post';
import About from '../pages/About';
import PageNotFound from '../pages/PageNotFound';
import Layout from '../layout/Layout';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Posts toast={toast} />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
