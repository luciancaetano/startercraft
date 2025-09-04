import AuthProviderContextProvider from './auth-provider.context';
import useAuthProviderModel from './auth-provider.model';
import { AuthProviderProps } from './auth-provider.types';
import React from 'react';

/**
 * `AuthProvider` is a React component that provides authentication context to its children.
 */
function AuthProvider(props: AuthProviderProps) {
  const { children } = props;

  const { authenticate, signout, store } = useAuthProviderModel(props);

  return (
    <AuthProviderContextProvider value={{ authenticate, signout, ...store }}>
      {children}
    </AuthProviderContextProvider>
  );
}

export default React.memo(AuthProvider);
