import { ITestableProps } from '@domain/models';
import React from 'react';

export interface MainLayoutProps extends React.PropsWithChildren<object>, ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}
