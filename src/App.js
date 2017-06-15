import React from 'react';
import {Router, match} from 'react-router'
import './common/style.scss'
import getRoutes from './routes'
import {Provider} from 'react-redux';
import history from 'history'
import createStore from 'store';
import prepareData from 'utils/prepareData'
import offlinePluginStart from 'utils/offlinePlugin'

const store = createStore(window.__INITIAL_STATE__)

const App = () => (
  <Provider store={store}>
    <Router history={history} key={Math.random()}>
      {getRoutes(store)}
    </Router>
  </Provider>
);

function historyCb(location) {
  match({location, routes: getRoutes(store)}, (error, redirectLocation, renderProps) => {
    if (!error && !redirectLocation && renderProps) {
      prepareData(store, renderProps)
    }
  })
}

history.listen(historyCb)
historyCb(window.location)
offlinePluginStart()


export default App