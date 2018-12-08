import './assets/styles/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './serviceWorker';
import urlToVenueId from './utils/urlToVenueId';
import './index.css';

const venueId =
  // eslint-disable-next-line no-undef
  process.env.REACT_APP_VENUE_ID || window.VENUEX_VENUE_ID || urlToVenueId(window.location.href);

ReactDOM.render(<App venueId={venueId} />, document.getElementById('root'));

registerServiceWorker();
