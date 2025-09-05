/// <reference types="vite/client" />
import './index.css';
import '@fontsource/roboto';
import '@lib/i18n/configure';
import App from './app';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
