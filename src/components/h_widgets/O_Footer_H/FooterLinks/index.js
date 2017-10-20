import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'

const cn = cssClassName('M_FooterLinks')

const _createLinksList = (section, links) => {
  switch(section) {
    case 'Info':
    case 'Legal':
    case 'Humaniq app':
      return links.map(({name, url, externalLink}, index) => (
        <li
          key = {`${section}-link-${index}`}
          className={cn('list-item')}
        >
          {externalLink ? (
            <a href={url} target='_blank'>{name}</a>
          ): (
            <a href={url}>{name}</a>
          )}
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
            <a href={mailTo}>{url}</a>
          </li>
        )
      })
  }
}

const _getLinks = (footerLinks) => (
  footerLinks.map(({section, links}, index) => (
    <div
      key={`footer-links-section-${index}`}
      className={cn('section')}
    >
      <p className={cn('section-title')}>{section}</p>
      <ul className={cn('list')}>
        {_createLinksList(section, links)}
      </ul>
    </div>
  ))
)

const M_FooterLinks = ({mix}) => (
  <div className={cn([mix])}>
    {_getLinks(footerLinks)}
  </div>
)

export default M_FooterLinks

M_FooterLinks.propTypes = {
  mix: T.string, //BEM mixin from parent block
};

const footerLinks = [
  {
    section: 'Info',
    links: [
      {name: 'Project details', url: '/open-source'},
      {name: 'Subscribe to newsletter', url: '/wiki'},
      {name: 'HMQ Explorer', url: '/hmq-explorer'},
      {name: 'Humaniq blog', url: '/hmq-explorer'}]
  },
  {
    section: 'Contacts',
    links: [
      {name: 'General: ', url: 'info@humaniq.com'},
      {name: 'For investors: ', url: 'invest@humaniq.com'},
      {name: 'Careers: ', url: 'work@humaniq.com'}
    ]
  },
  {section: 'Legal',
    links: [
      {name: 'Privacy', url: '/legal/general-privacy-policy'},
      {name: 'Security', url: '/legal/data-privacy-policy'},
      {name: 'Policies', url: '/legal/user-terms-of-service'}
    ]
  },
  {
    section: 'Humaniq app',
    links: [
      {name: 'Easy-to-use mobile app and financial infrastructure for billions of unbanked humaniqapp.com', url: 'http://humaniqapp.com/', externalLink: true},
    ]
  }
]