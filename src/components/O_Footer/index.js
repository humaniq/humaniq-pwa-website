import React from 'react';
import {Link} from 'react-router'
// import * as T from "prop-types";
import catnip from 'catnip';
import './styles.scss';
const cn = catnip('O_Footer');
const links = [
  { section: 'product', links: [{ name: 'Features', url: '#' }, { name: 'Open source', url: '#' }, { name: 'Humaniq wiki', url: '#' }] },
  { section: 'company', links: [{ name: 'Blog', url: '#' }, { name: 'News', url: '#' }, { name: 'Use cases', url: '#' }, { name: 'Partners', url: '#' }, { name: 'Events', url: '#' }]},
  { section: 'legal', links: [{ name: 'Privacy', url: '#' }, { name: 'Security', url: '#' }, { name: 'Policies', url: '#' }]},
  { section: 'resources', links: [{ name: 'Support', url: '#' }, { name: 'Contact us', url: '#' }, { name: 'Download mobile app', url: '#' }]}
]

function linksList() {
  return links.map( ({section, links}) => (
    <div className={cn('nav-section')} key={'key=' + section}>
      <div className={cn('nav-section__title')}>{section}</div>
      <ul className={cn('nav-list')}>
        { links.map( ({name, url}) => (
          <li className={cn('nav-list__item')} key={'key=' + name}>
            <Link to={url} className={cn('link')}>{name}</Link>
          </li>
        )) }
      </ul>
    </div>
  ))
}

const O_Footer = () => {
  return (
    <footer className={cn()}>
      <div className="l-container">
        <nav className={cn('nav')}>{linksList()}</nav>
        <div className={cn('aux')}>
          <div className={cn('lang')}>English (UK)</div>
          <div className={cn('soc')}>

          </div>
        </div>
      </div>
    </footer>
  )
}


O_Footer.propTypes = {};


export default O_Footer