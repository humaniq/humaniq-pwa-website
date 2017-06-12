import React, {Component} from 'react';
import * as T from "prop-types";
import {Helmet} from "react-helmet";
import O_Post from 'O_Post'

class SE_Post extends Component {
  render() {
    const {show, seoTitle, ...props} = this.props
    if(!show) return null
    return (
      <div>
        <Helmet>
          <title>{seoTitle}</title>
        </Helmet>
        <O_Post {...props}/>
      </div>
    )
  }
}

SE_Post.propTypes = {
  show: T.bool.isRequired,
  seoTitle: T.string,
};

SE_Post.defaultProps = {
  seoTitle: ''
}

export default SE_Post;
