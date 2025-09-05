import { AppProviderProps } from './app-provider.types';
import ErrorFallback from './components/error-fallback';
import Loader from '@components/elements/loader';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HashRouter as Router } from 'react-router-dom';

function AppProvider(props: AppProviderProps) {
  const { children } = props;

  return (
    <React.Suspense fallback={<Loader />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>{children}</Router>
      </ErrorBoundary>
    </React.Suspense>
  );
}

export default React.memo(AppProvider);
