import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import root from './sagas';
import rootReducer from '../reducers/rootReducer';
import { history } from './history';

const sagas = createSagaMiddleware();

const loggerMiddleware = createLogger();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer(history),
  composeEnhancer(applyMiddleware(sagas, loggerMiddleware, routerMiddleware(history)))
);

sagas.run(root);

export default store;
