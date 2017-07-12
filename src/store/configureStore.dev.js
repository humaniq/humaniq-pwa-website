import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from 'reducer';
import error from 'middleware/error';
import humaniqBackendApi from 'middleware/humaniqBackendApi'
import butterCmsApi from 'middleware/butterCmsApi'

// import createLogger from 'redux-logger';

const enhancer = composeWithDevTools(
  applyMiddleware(
    humaniqBackendApi,
    butterCmsApi,
    error),
);

const store = (initialState = {}) => createStore(
  reducer,
  initialState,
  enhancer
)

if (module.hot) {
  module.hot.accept('../reducer', () => {
    const nextRootReducer = require('../reducer/index');
    store.replaceReducer(nextRootReducer);
  });
}

export default store;