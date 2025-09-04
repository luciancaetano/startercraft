import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface HomePageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}
