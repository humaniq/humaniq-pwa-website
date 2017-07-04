import React, {Component} from 'react';
import {Link} from 'react-router'
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Footer')
import {Motion, spring} from 'react-motion';
import M_Select from 'M_Select';
import A_Link from 'A_Link'
import A_Container from 'A_Container'

const links = [
  {
    section: 'product',
    links: [{name: 'Features', url: '#'}, {name: 'Open source', url: '#'}, {name: 'Humaniq wiki', url: '/wiki'}]
  },
  {
    section: 'company',
    links: [{name: 'Blog', url: '#'}, {name: 'News', url: '#'}, {name: 'Use cases', url: '/use-cases'}, {name: 'Partners', url: '/partners'}, {name: 'Events', url: '#'}]
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

class O_Footer extends Component {

  state = {
    openedSection: null
  }

  handleTongleSection = (section) => {
    const {openedSection: oldSection} = this.state
    if(oldSection === section){
      this.setState({openedSection: null})
    }else{
      this.setState({openedSection: section})
    }
  }

  linksList(openedSection) {
    return links.map(({section, links}) => {
      const isOpen = openedSection === section
      return (
        <div className={cn('nav-section')} key={'key=' + section}>
          <div
            className={cn('nav-section__title', {isOpen})}
            onClick={() => this.handleTongleSection(section)}
          >{section}</div>
          <ul className={cn('nav-list', {isOpen})}>
            { links.map(({name, url}) => (
              <li className={cn('nav-list__item')} key={'key=' + name}>
                <A_Link to={url} disabled={url === '#'} >{name}</A_Link>
              </li>
            )) }
          </ul>
        </div>
      )
    })
  }

  socialsList() {
    return socials.map(({network, link}) => (
      <Link to={link} className={cn('soc-item')} title={network} key={network}>
        <img src={"/img/social/" + network + ".svg"}/>
      </Link>
    ))
  }

  render(){
    const {menuOpen} = this.props
    const {openedSection} = this.state
    const max = 100;
    const renderedSocialList = this.socialsList()
    const renderedLinksList = this.linksList(openedSection)
    return (
      <footer className={cn({menuOpen})}>
        <Motion
          defaultStyle={{x: 0}}
          style={{
            x: spring(menuOpen ? max : 0),
            y: menuOpen ? spring(max) : 0
          }}
        >
          {({x, y}) =>
            <A_Container>
              <div style={{
                transform: `translate3d(0, -${x}px, 0)`,
                opacity: `${y === 0 ? 1 : y / max}`,
                marginTop: `${x === 0 ? 0 : max}px`
              }}>
                <div className={cn('inner')}>
                  <nav className={cn('nav')}>{renderedLinksList}</nav>
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
                      {renderedSocialList}
                    </div>
                  </div>
                </div>
              </div>
            </A_Container>
          }
        </Motion>
      </footer>
    )
  }
}

O_Footer.propTypes = {};


export default O_Footer