import React, {Component} from 'react';
import PostContainer from 'containers/PostContainer'
import {fetchPost} from 'AC/post'
import initialLoad from 'utils/initialLoad'
import {setPage} from 'AC/navigation'

class PostRoute extends Component {

  static prepareData({dispatch}, query, {id}) {
    if(initialLoad()) return;
    return dispatch(fetchPost(id))
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