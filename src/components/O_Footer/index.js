import React from 'react';
import {Link} from 'react-router'
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Image from "../A_Image/index";
const cn = cssClassName('O_Footer')
const links = [
  { section: 'product', links: [{ name: 'Features', url: '#' }, { name: 'Open source', url: '#' }, { name: 'Humaniq wiki', url: '#' }] },
  { section: 'company', links: [{ name: 'Blog', url: '#' }, { name: 'News', url: '#' }, { name: 'Use cases', url: '#' }, { name: 'Partners', url: '#' }, { name: 'Events', url: '#' }]},
  { section: 'legal', links: [{ name: 'Privacy', url: '#' }, { name: 'Security', url: '#' }, { name: 'Policies', url: '#' }]},
  { section: 'resources', links: [{ name: 'Support', url: '#' }, { name: 'Contact us', url: '#' }, { name: 'Download mobile app', url: '#' }]}
]
const socials = [
  { network: 'facebook', link: '#'},
  { network: 'twitter', link: '#'},
  { network: 'github', link: '#'},
  { network: 'youtube', link: '#'},
  { network: 'slack', link: '#'}
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

function socialsList() {
  return socials.map( ({network, link}) => (
    <Link to={link} className={cn('soc-item')} title={network} key={network}>
      <img src={"/img/social/" + network + ".svg"}/>
    </Link>
  ))
}

const O_Footer = () => {
  return (
    <footer className={cn()}>
      <div className="l-container">
        <div className={cn('inner')}>
          <nav className={cn('nav')}>{linksList()}</nav>
          <div className={cn('aux')}>
            <div className={cn('lang')}>🇬🇧 English (UK)</div>
            <div className={cn('soc')}>
              {socialsList()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


O_Footer.propTypes = {};


export default O_Footer