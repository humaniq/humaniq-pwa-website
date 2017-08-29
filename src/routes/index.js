import {Route, IndexRoute} from 'react-router'
import React from 'react'
import App from './App'
import Home from './Home'
import HomeAnimations from './HomeAnimations'
import Error from './Error'
import Blog0 from './Blog0'
import SimpleForm from './SimpleForm'
import Partners from './Partners'
import Cases from './Cases'
import ContactUs from './ContactUs'
import Wiki from './Wiki'
import Wiki0 from './Wiki0'
import Wiki1 from './Wiki1'
import Wiki2 from './Wiki2'
import Legal from './Legal'
import OpenSource from './OpenSource'
import WikiSearch from './WikiSearch'
import HmqSearch from './HmqSearch'
import HmqHome from './HmqHome'
import Ambassadors from './Ambassadors'
import About from './About'
import HmqLayout from './HmqLayout'
import HmqTest from './HmqTest'
import HmqLog from './HmqLog'
import HmqHash from './HmqHash'
import HmqMarkets from './HmqMarkets'
import HmqHolders from './HmqHolders'
import HmqHolder from './HmqHolder'
import HmqBlock from './HmqBlock'

import {cleanHmqSearch} from 'store/entities/hmqSearch/actions'
import {cleanWikiSearch} from 'store/entities/wikiSearch/actions'
import {cleanHmqHolderT} from 'store/entities/hmqHolder/actions'

const getRoutes = (store) => {
  return (
    <Route
      path="/"
      component={App}
      prepareData={App.prepareData}
    >
      <IndexRoute
        component={Home}
        prepareData={Home.prepareData}
      />
      <Route
        path="test-animated-home"
        component={HomeAnimations}
      />
      <Route path="form"
      >
        <Route
           path="join"
           component={SimpleForm}
        />
        <Route
          path="subscribe"
          component={SimpleForm}
        />
        <Route
          path="ambassadors"
          component={SimpleForm}
        />
      </Route>
      <Route
        path="wiki"
        component={Wiki}
        prepareData={Wiki.prepareData}

      >
        <IndexRoute component={Wiki0}/>
        <Route
          path="search"
          component={WikiSearch}
          prepareData={WikiSearch.prepareData}
          onLeave={() => store.dispatch(cleanWikiSearch())}
        />
        <Route path=":level0">
          <IndexRoute component={Wiki1}/>
          <Route path=":id" component={Wiki2}/>
        </Route>
      </Route>
      <Route path="use-cases"
             component={Cases}
      />
      <Route path="contact-us"
             component={ContactUs}
      />
      <Route path="partners"
             prepareData={Partners.prepareData}
             component={Partners}
      />
      <Route path="legal">
        <Route path="general-privacy-policy" component={Legal} section="general-privacy-policy"/>
        <Route path="data-privacy-policy" component={Legal} section="general-privacy-policy" />
        <Route path="user-terms-of-service" component={Legal} section="general-privacy-policy" />
      </Route>
      <Route path="blog"
             component={Blog0}
      />
      <Route path="open-source"
             component={OpenSource}
      />
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
      <Route path="ambassadors"
             prepareData={Ambassadors.prepareData}
             component={Ambassadors}
      />
      <Route path="about"
             component={About}
      />
      <Route
        path="/error/:err"
        component={Error}
      />
      <Route
        path="*"
        component={Error}
      />
    </Route >
  )
}


export default getRoutes