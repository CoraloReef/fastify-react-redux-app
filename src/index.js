// @ts-check

import '../assets/application.scss';

import React from 'react';
import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import App from './components/App';
import reducer from './slices';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'root:*';
}

const store = configureStore({
  reducer,
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
