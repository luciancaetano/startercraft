import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface MainLayoutProps extends React.PropsWithChildren<object>, ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}
