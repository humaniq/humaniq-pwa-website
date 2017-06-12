import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import O_PostCard from 'O_PostCard'
const cn = cssClassName('O_PostsList')

class O_PostsList extends Component {
  getPostCards(posts){

    const renderPosts = posts.map( post => (
      <div
        className={cn('item')}
        key={post.id}
      >
        <O_PostCard {...post} />
      </div>
    ))


    for (let i = 0; i < 5; i++) {
      renderPosts.push(<div className={cn('empty')} key={"key_empty_" + i}/>)
    }

    return renderPosts
  }

  render() {
    const {posts} = this.props
    return (
      <div className={cn()}>
        {this.getPostCards(posts)}
      </div>
    )
  }
}

O_PostsList.propTypes = {
  posts: T.array.isRequired,
};


export default O_PostsList

