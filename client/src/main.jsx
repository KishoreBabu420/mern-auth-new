import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';

import './assets/styles/main.css';

import { store } from './redux/store';
import { Provider } from 'react-redux';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
