import React, { Suspense } from 'react';
import { RouteObject } from 'react-router';

const HomePage = React.lazy(() => import('./home-page'));

export const homePageRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <HomePage />
      </Suspense>
    ),
  },
];
