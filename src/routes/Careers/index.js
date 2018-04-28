import React from 'react';
import {Route, IndexRoute} from 'react-router'
import Careers from './Careers'
import CareersItem from './CareersItem'

// layout uses index route prepare data hook

export const careers = (
  <Route
    path="careers"
    // prepareData={Careers.prepareData}
  >
    <IndexRoute
      component={Careers}
    />
    <Route path=":jobId" component={CareersItem}/>
  </Route>
)

export default careers