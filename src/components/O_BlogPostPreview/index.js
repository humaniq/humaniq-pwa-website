import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_BlogPostPreview');


class O_BlogPostPreview extends Component {
  render() {
    const { type } = this.props;
    return (
      <section className={cn('section', { type })}>
        <div className={cn('item', { type })}>
          <span className={cn('rel-time')}>3 min. read</span>
          <figure className={cn('preview-figure')}>
            <img className={cn('preview-img', { type })} src="/img/mock/holder_400x280.png" alt=""/>
            <figcaption className={cn('preview-figcaption')}>
              <span className={cn('rel-date')}>Sunday, July 2, 2017</span>
              <h3 className={cn('author')}>Author Name</h3>
              <p className={cn('description-top')}>Ut viverra lorem arcu, vitae iaculis libero ultrices ut. Ut sagittis laoreet lectus id facilisis.</p>
              <small className={cn('description-bottom')}>Donec fermentum sapien eu posuere pulvinar. Ut viverra lorem arcu, vitae iaculis libero ultrices ut. Ut sagittis laoreet lectus…</small>
              <a href="#" className={cn('category-name')}>Category Name</a>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
}


O_BlogPostPreview.propTypes = {};

export default O_BlogPostPreview