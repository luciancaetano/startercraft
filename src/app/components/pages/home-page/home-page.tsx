import styles from './home-page.module.scss';
import { HomePageProps } from './home-page.types';
import useHomePageViewModel from './home-page.view-model';
import logo from '@assets/images/startercraft.png';
import BlinkButton from '@components/elements/blink-button';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';

function HomePage(props: HomePageProps) {
  const { className, testingID } = props;

  const { handleComponentsShowcaseClick } = useHomePageViewModel(props);

  return (
    <Page className={clsx('home-page', styles.homePage, className)} testingID={testingID}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={logo} className="max-w-sm rounded-lg shadow-2xl" alt="Startercraft Logo" />
          <div>
            <h1 className="text-5xl font-bold">Welcome to Startercraft!</h1>
            <p className="py-6">
              Startercraft is a base project template designed to accelerate your development
              process. It provides tools, configurations, and best practices to help you build
              scalable and maintainable applications efficiently.
            </p>
            <BlinkButton onClick={handleComponentsShowcaseClick}>Components Showcase</BlinkButton>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="readme-section max-w-[1280px]">
          <div className="bg-gradient-to-r  p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl font-extrabold mb-4">🚀 Welcome to Startercraft</h2>
            <p className="text-lg leading-relaxed mb-6">
              Startercraft is a <span className="font-semibold">powerful and flexible</span> project
              template designed to simplify the process of building modern web applications. With a
              focus on <span className="font-semibold">developer experience</span> and{' '}
              <span className="font-semibold">performance</span>, it provides everything you need to
              kickstart your next project.
            </p>
            <h3 className="text-2xl font-bold mb-3">✨ Features</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>
                ⚡ Pre-configured with <span className="font-semibold">TypeScript</span>,{' '}
                <span className="font-semibold">React</span>, and{' '}
                <span className="font-semibold">Tailwind CSS</span>.
              </li>
              <li>
                🛠️ Includes tools for <span className="font-semibold">routing</span>,{' '}
                <span className="font-semibold">state management</span>, and{' '}
                <span className="font-semibold">internationalization</span>.
              </li>
              <li>
                ✅ Robust testing setup with <span className="font-semibold">Jest</span> and{' '}
                <span className="font-semibold">React Testing Library</span>.
              </li>
              <li>📦 Code generation for components and features to speed up development.</li>
              <li>🔗 Path aliases for cleaner and more maintainable imports.</li>
            </ul>
            <h3 className="text-2xl font-bold mb-3">💡 Why Choose Startercraft?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                🚀 Accelerate your development process with pre-configured tools and best practices.
              </li>
              <li>🧩 Build scalable and maintainable applications with ease.</li>
              <li>
                🌟 Focus on delivering value to your users instead of setting up configurations.
              </li>
              <li>
                📚 Leverage a well-structured codebase that promotes collaboration and efficiency.
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-3xl font-bold mb-4">🛠️ What to Do Next?</h2>
            <p className="text-lg mb-4 text-center">
              Ready to kickstart your project? Use the powerful code generation tool to create
              components, features, and more in seconds.
            </p>
            <div className="text-center">
              <pre className="bg-blue-500 text-white p-4 rounded-lg inline-block shadow-lg text-lg font-bold">
                npm run generate
              </pre>
            </div>
            <p className="text-lg mt-4 text-center">
              Run this command in your terminal and let Startercraft handle the rest! 🚀
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default React.memo(withResourceBundle(HomePage, () => import('./translations')));
