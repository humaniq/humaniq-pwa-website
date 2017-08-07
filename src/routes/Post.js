import React, {Component} from 'react';
import PostContainer from 'containers/PostContainer'
// import {fetchPost} from 'store/entities/post/actions'
import initialLoad from 'utils/initialLoad'
// import {setPage} from 'store/entities/navigation/actions'

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