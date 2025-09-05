import MainLayout from '@components/layouts/main-layout';
import HomePage from '@components/pages/home-page';
import NotFoundPage from '@components/pages/not-found-page';
import { Outlet, RouteObject } from 'react-router-dom';

export default [
  {
    path: '/',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      { path: '', element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
] as RouteObject[];
