import { ITestableProps } from '@domain/models';
import React from 'react';

export interface PageProps
  extends React.PropsWithChildren<object>, ITestableProps, React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
}
