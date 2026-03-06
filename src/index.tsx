/// <reference types="vite/client" />
import './index.css';
import '@fontsource/roboto';
import App from './app';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

function reportWebVitals(onReport: (metric: { name: string; value: number }) => void) {
  onCLS(onReport);
  onFID(onReport);
  onLCP(onReport);
  onFCP(onReport);
  onTTFB(onReport);
}

if (import.meta.env.DEV) {
  reportWebVitals(console.log);
}
