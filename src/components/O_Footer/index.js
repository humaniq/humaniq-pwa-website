import React from 'react';
import {Link} from 'react-router'
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Footer')
import {Motion, spring} from 'react-motion';
import M_Select from 'M_Select';

const links = [
  {
    section: 'product',
    links: [{name: 'Features', url: '#'}, {name: 'Open source', url: '#'}, {name: 'Humaniq wiki', url: '#'}]
  },
  {
    section: 'company',
    links: [{name: 'Blog', url: '#'}, {name: 'News', url: '#'}, {name: 'Use cases', url: '/use-cases'}, {
      name: 'Partners',
      url: '#'
    }, {name: 'Events', url: '#'}]
  },
  {section: 'legal', links: [{name: 'Privacy', url: '#'}, {name: 'Security', url: '#'}, {name: 'Policies', url: '#'}]},
  {
    section: 'resources',
    links: [{name: 'Support', url: '#'}, {name: 'Contact us', url: '#'}, {name: 'Download mobile app', url: '#'}]
  }
]
const socials = [
  {network: 'facebook', link: '#'},
  {network: 'twitter', link: '#'},
  {network: 'github', link: '#'},
  {network: 'youtube', link: '#'},
  {network: 'slack', link: '#'}
]

function linksList() {
  return links.map(({section, links}) => (
    <div className={cn('nav-section')} key={'key=' + section}>
      <div className={cn('nav-section__title')}>{section}</div>
      <ul className={cn('nav-list')}>
        { links.map(({name, url}) => (
          <li className={cn('nav-list__item')} key={'key=' + name}>
            <Link to={url} className={cn('link')}>{name}</Link>
          </li>
        )) }
      </ul>
    </div>
  ))
}

function socialsList() {
  return socials.map(({network, link}) => (
    <Link to={link} className={cn('soc-item')} title={network} key={network}>
      <img src={"/img/social/" + network + ".svg"}/>
    </Link>
  ))
}

const O_Footer = ({menuOpen}) => {
  const max = 100;
  return (
    <footer className={cn()}>
      <Motion
        defaultStyle={{x: 0}}
        style={{
          x: spring(menuOpen ? max : 0),
          y: menuOpen ? spring(max) : 0

        }}
      >
        {({x, y}) =>
          <div className="l-container" style={{
            transform: `translate3d(0, -${x}px, 0)`,
            opacity: `${y === 0 ? 1 : y / max}`,
            marginTop: `${x === 0 ? 0 : max}px`
          }}>
            <div className={cn('inner')}>
              <nav className={cn('nav')}>{linksList()}</nav>
              <div className={cn('aux')}>
                <M_Select
                  options={[
                    {value: 'en', label: <span><span style={{top: 1, marginRight: 13, position:'relative'}}>🇬🇧</span>English (UK)</span>},
                    {value: 'ch', label: <span><span style={{top: 1, marginRight: 13, position:'relative'}}>🇨🇳</span>中文</span>},
                    {value: 'es', label: <span><span style={{top: 1, marginRight: 13, position:'relative'}}>🇪🇸</span>Español</span>},
                    {value: 'de', label: <span><span style={{top: 1, marginRight: 13, position:'relative'}}>🇩🇪</span>Deutsch</span>}
                  ]}
                  value = {'en'}
                  onChange={val => alert(val)}
                />
                <div className={cn('soc')}>
                  {socialsList()}
                </div>
              </div>
            </div>
          </div>
        }
      </Motion>
    </footer>
  )
}


O_Footer.propTypes = {};


export default O_Footer