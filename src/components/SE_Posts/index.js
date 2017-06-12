import React, {Component}  from 'react';
import * as T from "prop-types";
import {Helmet} from "react-helmet";
import O_PostsList from 'O_PostsList'

class SE_Posts extends Component {

  render(){
    const {
      indexPageTitle,
      posts,
      show
    } = this.props

    if(!show) return null
    return (
      <div>
        <Helmet>
          <title>{indexPageTitle}</title>
        </Helmet>
        <O_PostsList {...{posts}}/>
      </div>
    )
  }
}

SE_Posts.propTypes = {
  show: T.bool.isRequired,
  indexPageTitle: T.string,
  posts: T.array,
};

SE_Posts.defaultProps = {
  indexPageTitle: '',
  posts: [],
}

export default SE_Posts