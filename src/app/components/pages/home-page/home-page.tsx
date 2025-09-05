import styles from './home-page.module.scss';
import { HomePageProps } from './home-page.types';
import useHomePageViewModel from './home-page.view-model';
import logo from '@assets/images/startercraft.png';
import BlinkButton from '@components/elements/blink-button';
import Page from '@components/elements/page';
import clsx from 'clsx';
import React from 'react';

function HomePage(props: HomePageProps) {
  const { className, testingID } = props;
  const { handleViewRepo } = useHomePageViewModel(props);

  return (
    <Page className={clsx('home-page', styles.homePage, className)} testingID={testingID}>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg">
        <img
          src={logo}
          className="max-w-sm rounded-xl shadow-md hover:shadow-xl transition duration-300"
          alt="Startercraft Logo"
        />
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome to Startercraft!
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Startercraft is a base project template designed to accelerate your development process.
            It provides tools, configurations, and best practices to help you build scalable and
            maintainable applications efficiently.
          </p>
          <BlinkButton onClick={handleViewRepo}>View Repository</BlinkButton>
        </div>
      </div>

      {/* Readme Section */}
      <div className="flex justify-center items-center w-full mt-12">
        <div className="readme-section max-w-[1280px]">
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              🚀 Welcome to Startercraft
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Startercraft is a{' '}
              <span className="font-semibold text-gray-900">powerful and flexible</span> project
              template designed to simplify the process of building modern web applications. With a
              focus on <span className="font-semibold text-gray-900">developer experience</span> and{' '}
              <span className="font-semibold text-gray-900">performance</span>, it provides
              everything you need to kickstart your next project.
            </p>

            <h3 className="text-2xl font-bold mb-3 text-gray-800">✨ Features</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
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

            <h3 className="text-2xl font-bold mb-3 text-gray-800">💡 Why Choose Startercraft?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
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

          <div className="p-8 rounded-2xl shadow-md mt-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <h2 className="text-3xl font-bold mb-4">🛠️ What to Do Next?</h2>
            <p className="text-lg mb-4 text-center">
              Ready to kickstart your project? Use the powerful code generation tool to create
              components, features, and more in seconds.
            </p>
            <div className="text-center">
              <pre className="bg-black/40 p-4 rounded-lg inline-block shadow-lg text-lg font-bold">
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

export default React.memo(HomePage);
