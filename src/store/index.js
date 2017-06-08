import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from 'reducer';
import error from 'middleware/error';
import apiButter from 'middleware/apiButter'
// import createLogger from 'redux-logger';

const enhancer = composeWithDevTools(
  applyMiddleware(
    apiButter,
    error),
);

const store = (intialState) => createStore(
  reducer,
  intialState,
  enhancer
)

if (module.hot) {
  module.hot.accept('../reducer', () => {
    const nextRootReducer = require('../reducer/index');
    store.replaceReducer(nextRootReducer);
  });
}

export default store;