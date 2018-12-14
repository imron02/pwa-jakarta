import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import museum from '../containers/Museum/reducer';

const reducers = combineReducers({
  museum
});

export default createStore(reducers, applyMiddleware(logger));
