import React from 'react';
import {Route, IndexRoute} from 'react-router'
//import {cleanWikiSearch} from 'store/entities/wikiSearch/actions'
import WikiLayout from './WikiLayout'
import Wiki0 from './Wiki0'
import Wiki1 from './Wiki1'
import Wiki2 from './Wiki2'
//import WikiSearch from './WikiSearch'

const Wiki = (store) => (
  <Route
    path="wiki"
    component={WikiLayout}
    prepareData={WikiLayout.prepareData}

  >
    <IndexRoute component={Wiki0}/>
    {/*<Route*/}
    {/*  path="search"*/}
    {/*  component={WikiSearch}*/}
    {/*  prepareData={WikiSearch.prepareData}*/}
    {/*  onLeave={() => store.dispatch(cleanWikiSearch())}*/}
    {/*/>*/}
    <Route path=":level0">
      <IndexRoute component={Wiki1}/>
      <Route path=":id" component={Wiki2}/>
    </Route>
  </Route>
)

export default Wiki