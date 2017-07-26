import {Route, IndexRoute} from 'react-router'
import React from 'react'
import App from './PersonalApp'
import Home from './PersonalHome'
// import Error from './Error'
import PersonalForm from './PersonalForm'

const getRoutes = () => {
  return (
    <Route
      path="/hmqref/invite/:invitationCode"
      component={App}
      prepareData={App.prepareData}
    >
      <IndexRoute
        component={Home}
        prepareData={Home.prepareData}
      />
      <Route path="/hmqref/invite/:invitationCode/registration"
         component={PersonalForm}
      />

    </Route >
  )
}


export default getRoutes