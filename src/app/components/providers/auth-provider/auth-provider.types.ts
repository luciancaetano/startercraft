import { IUser } from '@app/types/auth';
import React from 'react';

/**
 * Props for the AuthProvider component.
 */
export interface AuthProviderProps extends React.PropsWithChildren<object> {
  className?: string;
}

/**
 * Represents the store for the authentication provider.
 */
export interface AuthProviderStore {
  isAuthenticated: boolean;
  user?: IUser;
  token?: string;
}

/**
 * Represents the context type for the authentication provider.
 */
export interface AuthProviderContextType {
  isAuthenticated: boolean;
  user?: IUser;
  token?: string;
  /**
   * Authenticates the user.
   * @param user The user to authenticate.
   */
  authenticate: (token: string, user: IUser) => void;

  /**
   * Signs out the user.
   */
  signout: () => void;
}
