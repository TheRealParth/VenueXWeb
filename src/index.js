import './assets/styles/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './serviceWorker';
import './index.css';

// eslint-disable-next-line no-undef

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
