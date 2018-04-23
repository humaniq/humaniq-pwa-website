import React from 'react';
import {Route, IndexRoute} from 'react-router'
import PressReleases from './PressReleases'
import PressReleasesItem from './PressReleasesItem'

// layout uses index route prepare data hook

export const careers = (
  <Route
    path="press-releases"
    prepareData={PressReleases.prepareData}
  >
    <IndexRoute
      component={PressReleases}
    />
    <Route path=":jobId" component={PressReleasesItem}/>
  </Route>
)

export default careers