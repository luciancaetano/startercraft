import MainLayout from '@components/layouts/main-layout';
import { homePageRoutes } from '@components/pages/home-page';
import NotFoundPage from '@components/pages/not-found-page';
import { themeShowcasePageRoutes } from '@components/pages/theme-showcase-page';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

export default [
  {
    path: '/',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [...themeShowcasePageRoutes, ...homePageRoutes],
  },
  {
    path: '/login',
    element: <Navigate to="/" />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
] as RouteObject[];
