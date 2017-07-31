import React, {Component} from 'react';
import PostsContainer from 'containers/PostsContainer'
import {fetchPosts} from 'AC/posts'
import initialLoad from 'utils/initialLoad'
import {setPage} from 'AC/navigation'

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

