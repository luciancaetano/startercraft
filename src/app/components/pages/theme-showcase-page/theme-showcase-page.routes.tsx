import Loader from '@components/elements/loader';
import React, { Suspense } from 'react';
import { RouteObject } from 'react-router';

const ThemeShowcasePage = React.lazy(() => import('./theme-showcase-page'));

export const themeShowcasePageRoutes: RouteObject[] = [
  {
    path: '/theme-showcase',
    element: (
      <Suspense fallback={<Loader />}>
        <ThemeShowcasePage />
      </Suspense>
    ),
  },
];
