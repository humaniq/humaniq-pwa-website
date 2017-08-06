import React, { PureComponent } from 'react';
import {Router, match} from 'react-router'
import './common/style.scss'
import getRoutes from './routes'
import {Provider} from 'react-redux';
import history from 'history'
import createStore from 'store';
import prepareData from 'utils/prepareData'
// import offlinePluginStart from 'utils/offlinePlugin'
import {closeMenu} from 'AC/navigation'
import {hashLinkScroll} from 'utils/hashLinkScroll'
import progress from 'utils/progressCalculation'
const store = createStore(window.__INITIAL_STATE__)

class App extends PureComponent {

  componentDidMount () {
    if (typeof document !== 'undefined') {
      // TODO: test on iOS device!!!
      progress()
    }
  }

  render () {
    return (
      <Provider store={store}>
        <Router
          history={history}
          key={Math.random()}
          onUpdate={()=> {
            window.scrollTo(0, 0)
            const state = store.getState()
            state.navigation.isMenuOpened && store.dispatch(closeMenu())
            hashLinkScroll()
          }}
        >
          {getRoutes(store)}
        </Router>
      </Provider>
    )
  }
}

function historyCb(location) {
  match({location, routes: getRoutes(store)}, (error, redirectLocation, renderProps) => {
    if (!error && !redirectLocation && renderProps) {
      prepareData(store, renderProps)
    }
  })
}

history.listen(historyCb)

historyCb(window.location)
// offlinePluginStart()


export default App