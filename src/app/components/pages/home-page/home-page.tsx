import styles from './home-page.module.scss';
import { HomePageProps } from './home-page.types';
import logo from '@assets/images/startercraft.png';
import Page from '@components/elements/page';
import clsx from 'clsx';
import React from 'react';

const HomePage: React.FC<HomePageProps> = ({ className, testingID }) => {
  return (
    <Page
      className={clsx(
        'home-page flex flex-col items-center justify-center min-h-screen gap-8',
        styles.homePage,
        className,
      )}
      testingID={testingID}
    >
      {/* Gradient background using logo colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#7420b9]" />

      <img src={logo} alt="Startercraft Logo" className="w-56 h-auto drop-shadow-lg" />

      <h1 className="text-5xl font-extrabold text-center text-white drop-shadow-md">
        Welcome to StarterCraft!
      </h1>
    </Page>
  );
};

export default React.memo(HomePage);
