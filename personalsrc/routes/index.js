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
      />
      <Route path="registration"
         component={PersonalForm}
      />
      <Route
        path="*"
        component={Home}
      />
    </Route >
  )
}


export default getRoutes