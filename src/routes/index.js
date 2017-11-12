import {Route, IndexRoute, Redirect} from 'react-router'
import React from 'react'
import App from './App'
import AppOld from './App_old'
import Home from './Home'
import Error from './Error'
import ContactUs from './ContactUs'
import legal from './Legal'
import OpenSource from './OpenSource'
import Ambassadors from './Ambassadors'
import HmqExplorer from './Hmq'
import Wiki from './Wiki'

// import Form from './Form'
// import Partners from './Partners'
// import Cases from './Cases'
// import About from './About'

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
        {legal}
        {HmqExplorer(store)}
        <Route path="open-source"
               prepareData={OpenSource.prepareData}
               component={OpenSource}
        />
        <Route path="ambassadors"
               prepareData={Ambassadors.prepareData}
               component={Ambassadors}
        />
        <Route path="contact-us"
               component={ContactUs}
               prepareData={ContactUs.prepareData}

        />
        <Route
          path="/error/:err"
          prepareData={Error.prepareData}
          component={Error}
        />

        <Redirect from='about' to='/' />

      </Route>

      <Route
        component={AppOld}
      >
        {/*<Route path="use-cases"*/}
               {/*component={Cases}*/}
        {/*/>*/}

        {/*<Route path="partners"*/}
               {/*prepareData={Partners.prepareData}*/}
               {/*component={Partners}*/}
        {/*/>*/}
        {/*{Form}*/}
        {Wiki(store)}

        {/*<Route path="about"*/}
               {/*component={About}*/}
        {/*/>*/}


      </Route>

      <Route
        component={App}
      >
        <Route
          path="*"
          prepareData={Error.prepareData}
          component={Error}
        />
      </Route>

    </Route >
  )
}


export default getRoutes