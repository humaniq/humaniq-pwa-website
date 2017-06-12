import React, {Component} from 'react';
import * as T from "prop-types";
import PostsContainer from 'containers/PostsContainer'
import {fetchPosts} from 'AC/posts'
import initialLoad from 'utils/initialLoad'

class PostsRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    return dispatch(fetchPosts())
  }

  render() {
    return (
      <div>
        <PostsContainer />
      </div>
    )
  }
}

PostsRoute.propTypes = {
};

export default PostsRoute;

