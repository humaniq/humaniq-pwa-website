import React, {Component} from 'react';
import PostsContainer from 'containers/PostsContainer'
import {fetchPosts} from 'store/entities/posts/actions'
import initialLoad from 'utils/initialLoad'
import {setPage} from 'store/entities/navigation/actions'

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



export default PostsRoute;

