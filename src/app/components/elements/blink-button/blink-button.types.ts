import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface BlinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ITestableProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
