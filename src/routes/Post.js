import React, {Component} from 'react';
import PostContainer from 'containers/PostContainer'
import {fetchPost} from 'AC/post'
import initialLoad from 'utils/initialLoad'

class PostRoute extends Component {

  static prepareData(store, query, {id}) {
    if(initialLoad()) return;
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

export default PostRoute;