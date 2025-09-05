/// <reference types="vite/client" />
/// <reference types="./i18next.d.ts" />
import './index.css';
import '@fontsource/roboto';
import '@config/i18n.config';
import App from './app';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
