import React, {Component} from 'react';
import PropTypes from "prop-types";
import PostsContainer from 'containers/PostsContainer'
import {fetchPosts} from 'AC/posts'

class PostsRoute extends Component {

  static prepareData({dispatch}) {
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

