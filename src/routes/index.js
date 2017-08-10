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
import Hmq from './Hmq'
import Ambassadors from './Ambassadors'
import About from './About'


import {cleanWikiSearch} from 'store/entities/wikiSearch/actions'

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
      <Route path="legal"
             component={Legal}
      />
      <Route path="blog"
             component={Blog0}
      />
      <Route path="open-source"
             component={OpenSource}
      />
      <Route path="hmq-explorer"
             prepareData={Hmq.prepareData}
             component={Hmq}
      />
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