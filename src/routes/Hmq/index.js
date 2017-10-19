import React from 'react';
import {Route, IndexRoute} from 'react-router'
import HmqLayout from './HmqLayout'
import HmqTest from './HmqTest'
import HmqLog from './HmqLog'
import HmqHash from './HmqHash'
import HmqMarkets from './HmqMarkets'
import HmqHolders from './HmqHolders'
import HmqHolder from './HmqHolder'
import HmqBlock from './HmqBlock'
import HmqSearch from './HmqSearch'
import HmqHome from './HmqHome'

import {cleanHmqHolderT} from 'store/entities/hmqHolder/actions'
import {cleanHmqSearch} from 'store/entities/hmqSearch/actions'

const Hmq = (store) => (
  <Route
    path="hmq-explorer"
    component={HmqLayout}
  >
    <IndexRoute
      component={HmqHome}
      prepareData={HmqHome.prepareData}
    />
    <Route path="transaction-log" >
      <IndexRoute
        component={HmqLog}
        prepareData={HmqLog.prepareData}
      />
      <Route path=":hash" component={HmqHash} prepareData={HmqHash.prepareData}/>
    </Route>
    <Route
      path="token-holders"
      prepareData={HmqHolders.prepareData}
    >
      <IndexRoute
        component={HmqHolders}
      />
      <Route
        path=":holder"
        component={HmqHolder}
        prepareData={HmqHolder.prepareData}
        onLeave={() => store.dispatch(cleanHmqHolderT())
        }
      />
    </Route>
    <Route path="markets"
           component={HmqMarkets}
           prepareData={HmqMarkets.prepareData}
    />
    <Route path="test" component={HmqTest}/>
    <Route path="block/:block" component={HmqBlock} prepareData={HmqBlock.prepareData}/>
    <Route
      path="search"
      component={HmqSearch}
      prepareData={HmqSearch.prepareData}
      onLeave={() => store.dispatch(cleanHmqSearch())}
    />
  </Route>
)

export default Hmq