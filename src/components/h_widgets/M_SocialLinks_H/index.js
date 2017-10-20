import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'

const cn = cssClassName('M_SocialLinks_H')

const _createLinks = (links) => (
  links.map((link, index) => {
    const linkIcon = {
      backgroundImage: `url(${link.icon})`
    }

    return (
      <a
        key={`socialLink-${index + 1}`}
        className={cn('link')}
        href={link.url}
        title={link.name}
        style={linkIcon}
        target="_blank"
      />
    )
  })
)

const M_SocialLinks_H = ({mix, children, type}) => (
  <div className={cn([mix], {type})}>
    <p className={cn('title')}>{children}</p>
    <nav className={cn('links-list')}>
      {_createLinks(socialLinks)}
    </nav>
  </div>
)

export default M_SocialLinks_H

M_SocialLinks_H.propTypes = {
  mix: T.string, //BEM mixin from parent block
  type: T.oneOf([
    'section', // layout for sections
    'footer', // layour for footer
  ]).isRequired
};

const socialLinks = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/humaniq.co/',
    icon: 'http://via.placeholder.com/45x45'
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/Humaniq',
    icon: 'http://via.placeholder.com/45x45'
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/humaniq_com/',
    icon: 'http://via.placeholder.com/45x45'
  },
  {
    name: 'github',
    url: 'https://github.com/humaniq',
    icon: 'http://via.placeholder.com/45x45'
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/channel/UCXatRidLHbngYUtF8JXICPA',
    icon: 'http://via.placeholder.com/45x45'
  },
  {
    name: 'slack',
    url: 'https://humaniq-co.slack.com/',
    icon: 'http://via.placeholder.com/45x45'
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/company/humaniq',
    icon: 'http://via.placeholder.com/45x45'
  },
  {
    name: 'telegram',
    url: 'https://t.me/humaniqglobalchallenge',
    icon: 'http://via.placeholder.com/45x45'
  }
]