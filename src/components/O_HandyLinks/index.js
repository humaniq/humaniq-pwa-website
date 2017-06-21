import React from 'react';
import {Link} from 'react-router'
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_H from 'A_H'
const cn = cssClassName('O_HandyLinks')

const links = [
  {
    name: 'News',
    url: '/news'
  },
  {
    name: 'Blog',
    url: '/blog'
  },
  {
    name: 'Open source',
    url: '/opensource'
  }
]

function linksList() {
  return links.map( ({name, url}) => (
    <li className={cn('list-item')} key={'key=' + name}>
      <Link to={url} className={cn('link')}>{name}</Link>
    </li>
  ))
}

const O_HandyLinks = () => {
  return (
    <section className={cn()}>
      <div className="l-container">
        <div className={cn('inner')}>
          <A_H type="h2">Looking for more?</A_H>
          <p className="p_center">These handy links will help you get on your way.</p>
          <ul className={cn('list')}>
            {linksList()}
          </ul>
        </div>
      </div>
    </section>
  )
}

O_HandyLinks.propTypes = {};

export default O_HandyLinks