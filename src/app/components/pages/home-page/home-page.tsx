import styles from './home-page.module.scss';
import { HomePageProps } from './home-page.types';
import useHomePageViewModel from './home-page.view-model';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi2';

function HomePage(props: HomePageProps) {
  const { className, testingID } = props;

  const {
    addTodo,
    handleInputChange,
    removeTodo,
    todoItems,
    todoText,
    toggleTodo,
    changeLanguage,
    language,
    t,
    handleGetStarted,
  } = useHomePageViewModel(props);

  return (
    <Page className={clsx('home-page', styles.homePage, className)} testingID={testingID}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Hero"
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome to Our Platform!</h1>
            <p className="py-6">
              Discover the best tools and resources to accelerate your development process. Join our
              community and start building amazing projects today.
            </p>
            <button className="btn btn-primary" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-xl mt-8 mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">✨ {t('title')} ✨</h1>
        <div className="flex mb-6">
          <input
            type="text"
            value={todoText}
            onChange={handleInputChange}
            placeholder={t('inputPlaceholder')}
            className="flex-1 border p-3 rounded-l focus:outline-none focus:shadow-outline-purple text-gray-700"
          />
          <button
            className="bg-purple-700 text-white p-3 rounded-r hover:bg-purple-800 focus:outline-none focus:shadow-outline-purple"
            onClick={addTodo}
          >
            {t('addTodo')}
          </button>
        </div>
        <ul>
          {todoItems.map((todo) => (
            <li
              key={todo.id}
              className={clsx(
                'flex items-center justify-between bg-gray-200 p-4 mb-4 rounded text-gray-700',
                { 'line-through': todo.completed },
              )}
              onClick={toggleTodo(todo.id)}
            >
              <span className="text-lg">{todo.text}</span>
              <button
                className="text-red-500 hover:text-red-700 focus:outline-none"
                onClick={removeTodo(todo.id)}
              >
                <HiOutlineTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-xl mt-8 mx-auto max-w-2xl">
        <div className="text-center text-gray-500 mt-4">
          {t('currentLanguage', { language: language })}
          <div className="flex justify-center mt-4">
            <button
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline-purple"
              onClick={changeLanguage('en')}
            >
              en
            </button>
            <button
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded ml-4 focus:outline-none focus:shadow-outline-purple"
              onClick={changeLanguage('pt-BR')}
            >
              pt-BR
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default React.memo(withResourceBundle(HomePage, () => import('./translations')));
