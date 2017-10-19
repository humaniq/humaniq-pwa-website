import React from 'react';
import {Route} from 'react-router'
import LegalRoute from './Legal.js'

const Legal = (
  <Route path='legal'>
    <Route path="general-privacy-policy" component={LegalRoute} section="general-privacy-policy"/>
    <Route path="data-privacy-policy" component={LegalRoute} section="general-privacy-policy" />
    <Route path="user-terms-of-service" component={LegalRoute} section="general-privacy-policy" />
  </Route>
)

export default Legal