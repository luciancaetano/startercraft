import { AppProviderProps } from './app-provider.types';
import ErrorFallback from './components/error-fallback';
import Loader from '@components/elements/loader';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useRoutes } from 'react-router-dom';

function AppProvider(props: AppProviderProps) {
  const { routes } = props;
  const element = useRoutes(routes);
  return (
    <React.Suspense fallback={<Loader />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>{element}</ErrorBoundary>
    </React.Suspense>
  );
}

export default React.memo(AppProvider);
