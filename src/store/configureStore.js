import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import root from './sagas';
import { rootReducer } from '../reducers';

const sagas = createSagaMiddleware();
let middleware = [sagas];

const configureStore = initialState => {
  const logger = createLogger();
  middleware.push(logger);
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  sagas.run(root);
  return store;
};

export default configureStore;
