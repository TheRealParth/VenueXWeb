import './assets/styles/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store from './store/store.jsx';
import { createBrowserHistory } from 'history';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
