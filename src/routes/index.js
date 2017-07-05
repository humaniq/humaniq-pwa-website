import {Route, IndexRoute} from 'react-router'
import React from 'react'
import App from './App'
import Error from './Error'
import Home from './Home'
import Wiki from './Wiki'
import Subscribe from './Subscribe'
import Partners from './Partners'
import Cases from './Cases'

const getRoutes = ({dispatch}) => {
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
      <Route path="wiki"
             component={Wiki}
             prepareData={Wiki.prepareData}
      />
      <Route path="subscribe"
             component={Subscribe}
      />
      <Route path="use-cases"
             component={Cases}
             prepareData={Cases.prepareData}
      />
      <Route path="Partners"
             component={Partners}
             prepareData={Partners.prepareData}
      />
      <Route
        path="/error/:err"
        component={Error}
      />
    </Route >
  )
}


export default getRoutes