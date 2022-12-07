import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LocaleStorageProvider } from './components/LocaleStorageProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <LocaleStorageProvider>
    <App />
  </LocaleStorageProvider>,
);
