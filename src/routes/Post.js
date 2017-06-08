import React, {Component} from 'react';
import PropTypes from "prop-types";
import PostContainer from 'containers/PostContainer'
import {fetchPost} from 'AC/post'

class PostRoute extends Component {

  static prepareData(store, query, {id}) {
    return store.dispatch(fetchPost(id))
  }

  render() {
    return (
      <div>
        <PostContainer />
      </div>
    )
  }
}

PostRoute.propTypes = {
};

export default PostRoute;