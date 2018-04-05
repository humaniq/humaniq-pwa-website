import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import {Link} from 'react-router'

const cn = cssClassName('M_FooterLinks')

class M_FooterLinks extends Component {
  _alertTest = (e) => {
    e.preventDefault();
    alert('ok')
    alert('next')
  }

  _createLinksList = (section, links) => {
    switch(section) {
      case 'Info':
      case 'Legal':
      case 'Humaniq app':
        return links.map(({name, url, externalLink, popupLink, formType}, index) => (
          <li
            key = {`${section}-link-${index}`}
            className={cn('list-item')}
          >
            { popupLink ? (
                <span className={cn('list-item-pop-up')} onClick={() => this.props.openPopup(formType)}>
                  {name}
                </span>
              ) : ( externalLink ?  <a href={url} target='_blank'>{name}</a> : <Link to={url}>{name}</Link>)
            }
          </li>
        ))
      case 'Contacts':
        return links.map(({name, url}, index) => {
          const mailTo = `mailto:${url}`
          return (
            <li
              key={`${section}-link-${index}`}
              className={cn('list-item')}
            >
              <span>{name}</span>
              <a href={mailTo} target='_blank'>{url}</a>
            </li>
          )
        })
    }
  }

  _getLinks = (footerLinks) => (
    footerLinks.map(({section, links}, index) => (
      <div
        key={`footer-links-section-${index}`}
        className={cn('section')}
      >
        <p className={cn('section-title')}>{section}</p>
        <ul className={cn('list')}>
          {this._createLinksList(section, links)}
        </ul>
      </div>
    ))
  )

  render() {
    const {mix} = this.props
    return (
      <div className={cn([mix])}>
        {this._getLinks(footerLinks)}
      </div>
    )
  }

}

export default M_FooterLinks

M_FooterLinks.propTypes = {
  mix: T.string, //BEM mixin from parent block
};

const footerLinks = [
  {
    section: 'Info',
    links: [
      {name: 'Project details', url: '/pdf/humaniq-whitepaper-05.09.pdf', externalLink: true},
      {name: 'Wiki', url: '/wiki'},
      // {name: 'HMQ Explorer', url: '/hmq-explorer'},
      {name: 'Humaniq blog', url: 'https://forum.humaniq.co', externalLink: true},
      {name: 'Careers', url: '/careers'},

    ]
  },
  {
    section: 'Contacts',
    links: [
      {name: 'General: ', url: 'info@humaniq.com'},
      {name: 'For investors: ', url: 'invest@humaniq.com'},
      {name: 'Careers: ', url: 'hr@humaniq.com'},
      {name: 'Support: ', url: 'appsupport@humaniq.com'}

    ]
  },
  {section: 'Legal',
    links: [
      {name: 'Privacy', url: '/legal/general-privacy-policy'},
      {name: 'Security', url: '/legal/data-privacy-policy'},
      {name: 'Policies', url: '/legal/user-terms-of-service'},
      {name: 'Howey Test', url: '/a-securities-law-framework-for-hmq.xlsx', externalLink: true}

    ]
  },
  {
    section: 'Humaniq app',
    links: [
      {name: 'Easy-to-use mobile app and financial infrastructure for billions of unbanked humaniqapp.com', url: 'http://humaniqapp.com/', externalLink: true},
    ]
  }
]