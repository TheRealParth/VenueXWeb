import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import root from './sagas';
import rootReducer from '../reducers/rootReducer';
import App from '../App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './history';

const sagas = createSagaMiddleware();

const loggerMiddleware = createLogger();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = history => {
  const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(applyMiddleware(sagas, loggerMiddleware, routerMiddleware(history)))
  );
  sagas.run(root);
  return store;
};

export default store;
