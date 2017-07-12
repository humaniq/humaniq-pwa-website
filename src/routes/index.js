import {Route, IndexRoute} from 'react-router'
import React from 'react'
import App from './App'
import Home from './Home'
// import Error from './Error'
// import Wiki from './Wiki'
import SimpleForm from './SimpleForm'
import Partners from './Partners'
// import Cases from './Cases'

// you are reciving store in function
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
      {/*<Route path="wiki"*/}
             {/*component={Wiki}*/}
             {/*prepareData={Wiki.prepareData}*/}
      {/*/>*/}

      {/*<Route path="use-cases"*/}
             {/*component={Cases}*/}
             {/*prepareData={Cases.prepareData}*/}
      {/*/>*/}
      <Route path="Partners"
             component={Partners}
             // prepareData={Partners.prepareData}
      />
      {/*<Route*/}
        {/*path="/error/:err"*/}
        {/*component={Error}*/}
      {/*/>*/}
    </Route >
  )
}


export default getRoutes