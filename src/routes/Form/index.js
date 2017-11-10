import React from 'react';
import {Route} from 'react-router'
import SimpleForm from './SimpleForm.js'

const Form = (
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
)

export default Form