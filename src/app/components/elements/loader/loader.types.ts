import { ITestableProps } from '@domain/models';
import React from 'react';

export interface LoaderProps extends React.PropsWithChildren<object>, ITestableProps {
  className?: string;
  style?: React.CSSProperties;
}
