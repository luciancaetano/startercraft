import { AuthProviderProps, AuthProviderStore } from './auth-provider.types';
import { IUser } from '@app/types/auth';
import { useCallback, useEffect, useRef, useState } from 'react';

function getSaveAuthData(): AuthProviderStore {
  const userJson = localStorage.getItem('user');
  const token = localStorage.getItem('token');
  const tenantsJson = localStorage.getItem('tenants');

  if (!userJson || !token || !tenantsJson)
    return {
      isAuthenticated: false,
    };

  try {
    const usr = JSON.parse(userJson) as IUser;
    const tenants = JSON.parse(tenantsJson);

    if (usr.id && tenants) {
      return {
        isAuthenticated: true,
        token,
        user: usr,
      };
    }

    return {
      isAuthenticated: false,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('tenants');
    localStorage.removeItem('current-tenant-id');
  }

  return {
    isAuthenticated: false,
  };
}

function useAuthProviderModel({}: AuthProviderProps) {
  const initalizedState = useRef<boolean>(false);

  const [store, setStore] = useState<AuthProviderStore>(getSaveAuthData());

  const authenticate = useCallback((token: string, user: IUser) => {
    setStore({
      isAuthenticated: true,
      user,
      token,
    });

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }, []);

  const signout = useCallback(() => {
    setStore({
      isAuthenticated: false,
      user: undefined,
      token: undefined,
    });
    localStorage.removeItem('user');
  }, []);

  useEffect(() => {
    if (!initalizedState.current) {
      initalizedState.current = true;

      const userJson = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      const tenantsJson = localStorage.getItem('tenants');

      if (!userJson || !token || !tenantsJson) return;

      try {
        const usr = JSON.parse(userJson) as IUser;
        const tenants = JSON.parse(tenantsJson);

        if (usr.id && tenants) {
          setStore({
            isAuthenticated: true,
            token,
            user: usr,
          });
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('tenants');
        localStorage.removeItem('current-tenant-id');
      }
    }
  }, [authenticate]);

  return {
    store,
    authenticate,
    signout,
  };
}

export default useAuthProviderModel;
