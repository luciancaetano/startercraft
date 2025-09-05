import styles from './not-found-page.module.scss';
import { NotFoundPageProps } from './not-found-page.types';
import useNotFoundPageViewModel from './not-found-page.view-model';
import Page from '@components/elements/page';
import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
function NotFoundPage(props: NotFoundPageProps) {
  const { className, testingID, style } = props;

  const {} = useNotFoundPageViewModel(props);

  return (
    <Page
      className={clsx(
        'not-found-page flex flex-col justify-center items-center',
        styles.notFoundPage,
        className,
      )}
      testingID={testingID}
      style={style}
    >
      <h1 className="text-9xl font-extrabold text-gray-900 dark:text-white tracking-widest">404</h1>
      <div className="bg-primary-600 px-2 text-sm rounded rotate-12 absolute text-white">
        {'page.not.found'}
      </div>
      <NavLink to="/" className="btn mt-5 btn-primary text-white">
        {'goto.agenda'}
      </NavLink>
    </Page>
  );
}

export default React.memo(NotFoundPage);
