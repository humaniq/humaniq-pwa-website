import {Route, IndexRoute} from 'react-router'
import React from 'react'
import App from './App'
import AppOld from './App_old'
import Home from './Home'
import Error from './Error'
import Partners from './Partners'
import Cases from './Cases'
import ContactUs from './ContactUs'
import legal from './Legal'
import OpenSource from './OpenSource'
import Ambassadors from './Ambassadors'
import About from './About'
import HmqExplorer from './Hmq'
import Wiki from './Wiki'
import Form from './Form'

const getRoutes = (store) => {
  return (
    <Route
      path="/"
      prepareData={App.prepareData}
    >
      <Route
        component={App}
      >
        <IndexRoute
          component={Home}
          prepareData={Home.prepareData}
        />
      </Route>

      <Route
        component={AppOld}
      >
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
        {Form}
        {legal}
        {HmqExplorer(store)}
        {Wiki(store)}

        <Route path="open-source"
               component={OpenSource}
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
      </Route>

    </Route >
  )
}


export default getRoutes