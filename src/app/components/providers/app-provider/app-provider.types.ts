import React from 'react';

export interface AppProviderProps extends React.PropsWithChildren<object> {
  styles?: React.CSSProperties;
  withoutRouter?: boolean;
}
