import './assets/styles/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/configureStore';

import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
