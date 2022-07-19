import React from 'react';
import { useSelector } from 'react-redux';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { selectAuthorization } from '../appSlice';
import getRoutes from './routes';
import Layout from '../../layout/Layout';

export default function AppRouter() {
  const isAuthorized = useSelector(selectAuthorization);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {getRoutes(isAuthorized).map((route) => (
          <Route index={route.index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}
