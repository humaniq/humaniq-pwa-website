import React from 'react';
import {Route} from 'react-router'
import LegalRoute from './Legal.js'

const Legal = (
  <Route path='legal' prepareData={LegalRoute.prepareData}>
    <Route path="general-privacy-policy" component={LegalRoute} section="general-privacy-policy"/>
    <Route path="data-privacy-policy" component={LegalRoute} section="general-privacy-policy" />
    <Route path="humaniq-terms-of-use" component={LegalRoute} section="general-privacy-policy" />
  </Route>
)

export default Legal