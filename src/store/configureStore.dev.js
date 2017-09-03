import {createStore as reduxCreateStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from 'store/rootReducer';
import error from 'store/middleware/error';
import humaniqBackendApi from 'store/middleware/humaniqBackendApi'
import butterCmsApi from 'store/middleware/butterCmsApi'

// import createLogger from 'redux-logger';

let store

const createStore = (initialState = {}) => {
  if (!store) {
    const enhancer = composeWithDevTools(
      applyMiddleware(humaniqBackendApi, butterCmsApi, error)
    )

    store = reduxCreateStore(
      reducer,
      initialState,
      enhancer
    )
  }

  if (module.hot) {
    module.hot.accept('./', () => {
      const nextRootReducer = require('./rootReducer')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default createStore
