import {Route, IndexRedirect} from 'react-router'
import React from 'react'
import App from './App'
import Posts from './Posts'
import Post from './Post'
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
    </Route >
  )
}


export default getRoutes