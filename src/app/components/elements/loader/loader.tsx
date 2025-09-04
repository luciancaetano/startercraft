import styles from './loader.module.scss';
import { LoaderProps } from './loader.types';
import clsx from 'clsx';
import React from 'react';

function Loader(props: LoaderProps) {
  const { className, testingID, style } = props;

  return (
    <div className={clsx('loader', styles.loader, className)} data-testid={testingID} style={style}>
      <p>Loading</p>
    </div>
  );
}

export default Loader;
