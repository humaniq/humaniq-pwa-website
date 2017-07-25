import {Route, IndexRoute} from 'react-router'
import React from 'react'
import App from './PersonalApp'
import Home from './PersonalHome'
// import Error from './Error'
import PersonalForm from './PersonalForm'

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
         component={PersonalForm}
      >

      </Route>

    </Route >
  )
}


export default getRoutes