import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from 'store/rootReducer';
import error from 'store/middleware/error';
import humaniqBackendApi from 'store/middleware/humaniqBackendApi'
import butterCmsApi from 'store/middleware/butterCmsApi'

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
  module.hot.accept('./rootReducer', () => {
    const nextRootReducer = require('./rootReducer');
    store.replaceReducer(nextRootReducer);
  });
}

export default store;