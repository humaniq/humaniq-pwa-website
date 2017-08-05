import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Footer')
import {Motion, spring} from 'react-motion';
import A_Link from 'A_Link'
import A_Image from 'A_Image'
import A_Container from 'A_Container'
import {WEBSITE_DOMAIN_NAME} from 'constants/api'

const links = [
  {
    section: 'product',
    links: [
      // {name: 'Features', url: '#'},
      {name: 'Open source', url: '/open-source'},
      {name: 'Humaniq Wiki', url: '/wiki'},
      {name: 'HMQ Explorer', url: '/hmq-explorer'}]
  },
  {
    section: 'company',
    links: [
      {name: 'Blog', url: 'https://blog.humaniq.co', externalLink: true},
      {name: 'Forum', url: 'https://forum.humaniq.co', externalLink: true},
      // {name: 'News', url: '#'},
      {name: 'Use Cases', url: '/use-cases'},
      {name: 'Partners', url: '/partners'},
      {name: 'Ambassadors', url: '/ambassadors'},
      // {name: 'Events', url: '#'}
    ]
  },
  {section: 'legal',
    links: [
    {name: 'Privacy', url: '/legal#general-privacy-policy'},
    {name: 'Security', url: '/legal#data-privacy-policy'},
    {name: 'Policies', url: '/legal#user-terms-of-service'}
    ]
  },
  {
    section: 'resources',
    links: [
      // {name: 'Support', url: '#'},
      {name: 'Contact us', url: '/contact-us'},
      // {name: 'Download mobile app', url: '#'}
    ]
  }
]
const socials = [
  {network: 'facebook', link: 'https://www.facebook.com/humaniq.co'},
  {network: 'twitter', link: 'https://twitter.com/Humaniq_co'},
  {network: 'github', link: 'https://github.com/humaniq'},
  {network: 'youtube', link: 'https://www.youtube.com/channel/UCXatRidLHbngYUtF8JXICPA'},
  {network: 'slack', link: 'https://humaniq-co.slack.com'},
  {network: 'linkedin', link: 'https://www.linkedin.com/company/humaniq'},
  {network: 'instagram', link: 'https://www.instagram.com/humaniq.co/'}
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

  linksList(openedSection, allLinksExternal) {
    return links.map(({section, links}) => {
      const isOpen = openedSection === section

      return (
        <div className={cn('nav-section')} key={'key=' + section}>
          <div
            className={cn('nav-section-title', {isOpen})}
            onClick={() => this.handleTongleSection(section)}
          >{section}</div>
          <ul className={cn('nav-list', {isOpen})}>
            { links.map(({name, url, externalLink}) => {
              const external = allLinksExternal || externalLink
              const to = (allLinksExternal && !externalLink) ? `https://${WEBSITE_DOMAIN_NAME + url}`  : url
              return(
                <li className={cn('nav-list__item')} key={'key=' + name}><A_Link to={to} type='primary' external={external}>{name}</A_Link></li>
              )
            }) }
          </ul>
        </div>
      )
    })
  }

  socialsList() {
    return socials.map(({network, link}) => (
      <span className={cn('soc-item')} key={'key_' + network}>
        <A_Link to={link} title={network} key={network} external>
          <A_Image src={"/img/social/" + network + ".svg"} alt={network} link realSize/>
        </A_Link>
      </span>
    ))
  }

  render(){
    const {isMenuOpened, externalLinks} = this.props
    const {openedSection} = this.state
    const max = 100;
    const renderedSocialList = this.socialsList()
    const renderedLinksList = this.linksList(openedSection, externalLinks)
    return (
      <footer className={cn({isMenuOpened})}>
        <A_Container>
          <Motion
            defaultStyle={{y: 0}}
            style={{
              y: isMenuOpened ? spring(max) : 0
            }}
          >
            {({y}) =>
              <div style={{
                transform: `translate3d(0, -${y}px, 0)`,
                opacity: `${y === 0 ? 1 : y / max}`,
                marginTop: `${y === 0 ? 0 : max}px`
              }}>
                <div className={cn('inner')}>
                  <nav className={cn('nav')}>{renderedLinksList}</nav>
                  <div className={cn('aux')}>
                    <div
                      className={cn('aux-title')}
                    >Humaniq</div>
                    <p className={cn('about')}>
                      Humaniq is a simple and secure mobile app, delivering financial inclusion solutions to the 2.5 billion unbanked / 1 billion underbanked globally.
                    </p>
                    <div className={cn('soc')}>
                      {renderedSocialList}
                    </div>
                  </div>
                </div>
              </div>
            }
          </Motion>
        </A_Container>
      </footer>
    )
  }
}

O_Footer.propTypes = {
  isMenuOpened: T.bool.isRequired,
  externalLinks: T.bool
};

O_Footer.defaultProps = {
  isisMenuOpeneded: T.bool.isRequired,
  externalLinks: false
};

export default O_Footer
