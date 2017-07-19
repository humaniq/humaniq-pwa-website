import {Route, IndexRoute} from 'react-router'
import React from 'react'
import App from './App'
import Home from './Home'
// import Error from './Error'
import SimpleForm from './SimpleForm'
import Partners from './Partners'
import Cases from './Cases'
import Wiki from './Wiki'
import Wiki0 from './Wiki0'
import Wiki1 from './Wiki1'
import Wiki2 from './Wiki2'
import Legal from './Legal'

const getRoutes = () => {
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
      </Route>
      <Route path="wiki"
             component={Wiki}
      >
        <IndexRoute
          component={Wiki0}
        />
        <Route
          path=":section"
        >
          <IndexRoute
            component={Wiki1}
          />
          <Route
            path=":article"
            component={Wiki2}
          />
        </Route>
      </Route>

      <Route path="use-cases"
             component={Cases}
      />
      <Route path="Partners"
             component={Partners}
          // prepareData={Partners.prepareData}
      />
      <Route path="Legal"
             component={Legal}
      />
      {/*<Route*/}
        {/*path="/error/:err"*/}
        {/*component={Error}*/}
      {/*/>*/}
    </Route >
  )
}


export default getRoutes