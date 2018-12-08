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

const venueId = process.env.REACT_APP_VENUE_ID || window.VENUEX_VENUE_ID;

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App venueId={venueId} />
    </Provider>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
