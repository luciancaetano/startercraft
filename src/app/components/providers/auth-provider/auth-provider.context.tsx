import { AuthProviderContextType } from './auth-provider.types';
import { createContext, useContext, PropsWithChildren } from 'react';

const AuthProviderContext = createContext<AuthProviderContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthProviderContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProviderContext.Provider');
  }
  return context;
};

export default function AuthProviderContextProvider({
  value,
  children,
}: PropsWithChildren<{ value: AuthProviderContextType }>) {
  return <AuthProviderContext.Provider value={value}>{children}</AuthProviderContext.Provider>;
}
