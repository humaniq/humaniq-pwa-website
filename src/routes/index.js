import {Route, IndexRoute} from 'react-router'
import React from 'react'
import App from './App'
import Posts from './Posts'
import Post from './Post'
import Error from './Error'
import Home from './Home'
import Wiki from './Wiki'
import Subscribe from './Subscribe'
import {postPath} from 'utils/routesHelpers'
import {closePost} from 'AC/post'

const getRoutes = ({dispatch}) => {
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
      <Route path="posts"
             component={Posts}
             prepareData={Posts.prepareData}
      />
      <Route path="wiki"
             component={Wiki}
      />
      <Route path="subscribe"
             component={Subscribe}
      />
      <Route path={postPath()}
             component={Post}
             prepareData={Post.prepareData}
             onLeave={() => dispatch(closePost())}
      />
      <Route
        path="/error/:err"
        component={Error}
      />
    </Route >
  )
}


export default getRoutes