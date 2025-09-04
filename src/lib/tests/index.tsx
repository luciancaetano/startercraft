/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import AppProvider from '@components/providers/app-provider';
import { render as testRender, renderHook as testRenderHook, act } from '@testing-library/react';
import React, { ComponentType } from 'react';

export const appWrapper = ({ children }: React.PropsWithChildren<object>) => (
  <AppProvider>{children}</AppProvider>
);

export const render = (Component: React.ReactElement) =>
  testRender(Component, { wrapper: appWrapper });

export const renderHook: typeof testRenderHook = (callback, options) =>
  testRenderHook(callback, { wrapper: appWrapper as any, ...options });

export { act };

export function withAppWrapper<T>(WrappedComponent: ComponentType<T>): ComponentType<T> {
  return (props: T) => (
    <AppProvider>
      <WrappedComponent {...(props as any)} />
    </AppProvider>
  );
}
