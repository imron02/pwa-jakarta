import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import login from '../containers/Login/reducer';
import museum from '../containers/Museum/reducer';

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const reducers = combineReducers({
  login,
  museum
});

export default createStore(reducers, applyMiddleware(...middleware));
