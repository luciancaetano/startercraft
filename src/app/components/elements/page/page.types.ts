import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface PageProps
  extends React.PropsWithChildren<object>,
    ITestableProps,
    React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
}
