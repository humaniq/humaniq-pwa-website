import {Route, IndexRedirect} from 'react-router'
import React from 'react'
import App from './App'
import Posts from './Posts'
import Post from './Post'
import Error from './Error'
import {postPath} from 'utils/routesHelpers'
import {closePost} from 'AC/post'

const getRoutes = ({dispatch}) => {
  return (
    <Route
      path="/"
      component={App}
      prepareData={App.prepareData}

    >
      <IndexRedirect to='posts'/>
      <Route path="posts"
             component={Posts}
             prepareData={Posts.prepareData}
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