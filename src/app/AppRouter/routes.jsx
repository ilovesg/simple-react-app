import React from 'react';
import { toast } from 'react-toastify';
import Posts from '../../features/posts/Posts';
import Post from '../../features/posts/PostList/PostTable/PostItem/Post/Post';
import Home from '../../pages/Home';
import About from '../../pages/About';
import PageNotFound from '../../pages/PageNotFound';
import Login from '../../pages/Login';

export default function getRoutes(isAuthorized) {
  const publicRoutes = [
    { index: true, element: <Home />, menuTitle: 'Home' },
    { path: 'about', element: <About />, menuTitle: 'About' },
    { path: 'login', element: <Login /> },
    { path: '*', element: <PageNotFound /> },
  ];

  const privateRoutes = [
    ...publicRoutes,
    { path: 'posts', element: <Posts toast={toast} />, menuTitle: 'Posts' },
    { path: 'posts/:id', element: <Post /> },
  ];

  return isAuthorized ? privateRoutes : publicRoutes;
}
