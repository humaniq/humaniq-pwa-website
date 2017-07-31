import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
import O_BlogPostPreview from 'O_BlogPostPreview';
const cn = cssClassName('SE_Blog0');
import A_Container from 'A_Container';
import * as T from "prop-types";
import A_H from 'A_H';
import O_Hero from 'O_Hero';
import A_P from 'A_P';
import A_Link from 'A_Link';
import {convert} from 'utils';

const casesData = [
  {
    title: 'Phasellus consectetur sapien'
  },
  {
    title: 'Tincidunt felis commodo sit amet'
  },
  {
    title: 'Vivamus consectetur urna efficitur'
  },
  {
    title: 'Venenatis neque nec, sodales urna'
  },
  {
    title: 'Nam dictum'
  }
]

class Blog0 extends Component {
  render() {
    const renderedlinks = casesData.map( (caseItem, i) =>{
      const anchor = convert.toKebab(caseItem.title)
      return(
        <li key={'Key_' + i} className={cn('nav-links-item')}>
          <A_Link to={`/use-cases/#${anchor}`} type="primary">{caseItem.title}</A_Link>
        </li>
      )
    })

    return (
      <A_Container type='section-clean'>
        <O_Hero img={{src: '/img/mock/holder_400x280.png', alt: 'Humaniq Blog'}}>
          <A_H type="hero">Humaniq Blog</A_H>
          <div className={cn('hero-sub')}>
            <A_P type="hero">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus felis sem, ullamcorper non arcu sit amet, ornare suscipit nisi. Morbi iaculis augue ac tortor rutrum, ut porta lacus elementum. </A_P>
          </div>
          <nav className={cn('nav-links')}>
            <A_H type='section-sub'>Categories</A_H>
            <ul>
              {renderedlinks}
            </ul>
          </nav>
        </O_Hero>

        <div className={cn('container-title')}>
          <A_H type="hero">Featured</A_H>
        </div>

        <div className={cn('row')}>
          <O_BlogPostPreview type="featured" />
        </div>

        <div className={cn('container-title')}>
          <A_H type="hero">Latest</A_H>
        </div>

        <div className={cn('col')}>
          <O_BlogPostPreview type="latest" />
          <O_BlogPostPreview type="latest" />
          <O_BlogPostPreview type="latest" />
          <O_BlogPostPreview type="latest" />
          <O_BlogPostPreview type="latest" />
          <O_BlogPostPreview type="latest" />
        </div>
      </A_Container>
    )
  }
}

Blog0.propTypes = {
  type: T.oneOf([
    'featured', // preview in row
    'latest', // short preview in col
  ])
};

export default Blog0