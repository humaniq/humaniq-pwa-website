import {createStore, applyMiddleware} from 'redux';
import reducer from 'reducer';
import error from 'middleware/error';
import humaniqBackendApi from 'middleware/humaniqBackendApi'
import butterCmsApi from 'middleware/butterCmsApi'

const enhancer = applyMiddleware(humaniqBackendApi, butterCmsApi, error)

const store = (initialState = {}) => createStore(
  reducer,
  initialState,
  enhancer
)

export default store;