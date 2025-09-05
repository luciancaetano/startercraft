import styles from './main-layout.module.scss';
import { MainLayoutProps } from './main-layout.types';
import clsx from 'clsx';
import React from 'react';

function MainLayout(props: MainLayoutProps) {
  const { children, className, testingID } = props;

  return (
    <div className={clsx('main-layout', styles.mainLayout, className)} data-testid={testingID}>
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <main className="flex flex-1 overflow-x-auto w-full bg-gray-100 dark:bg-transparent">
            <div className="flex flex-1">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MainLayout);
