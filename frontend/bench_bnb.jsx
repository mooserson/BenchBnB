import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';
import {login, logout} from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  window.store = store;
  window.login = login;
  window.logout = logout;
  ReactDOM.render(<Root store={store}/>, rootEl);
});
