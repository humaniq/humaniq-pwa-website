import {createStore, applyMiddleware} from 'redux';
import reducer from 'reducer';
import error from 'middleware/error';
import apiButter from 'middleware/apiButter'

const enhancer = applyMiddleware(apiButter, error)

const store = (initialState = {}) => createStore(
  reducer,
  initialState,
  enhancer
)

export default store;