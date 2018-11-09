import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'

const cn = cssClassName('M_SocialLinks_F')

const socialIcons = `/img/design-v2/icons/social/sprite.svg`

const handleLinkClick = (name) => {
  if (window.ga) window.ga('send', 'event', 'other', 'social-click-' + name);
  if (window.fbq) window.fbq('trackCustom', 'socialClick', { name: name });
}


const _createLinks = (links) => (
    links.map(({name, url}, index) => {

      return (
            <a
                key={`socialLink-${index + 1}`}
                className={cn('link')}
                href={url}
                title={name}
                target="_blank"
                onClick={() => {
                  handleLinkClick(name)
                }}
            >
                <svg>
                    <use xlinkHref={`${socialIcons}#${name}`}/>
                </svg>
            </a>
      )
    })
)

const M_SocialLinks_H = ({mix, children, type}) => (
    <div className="m-socials-f">
        <div className={cn([mix], {type})}>
            <nav className={cn('links-list')}>
                {_createLinks(socialLinks)}
            </nav>
        </div>
        <div className={cn([mix], {type})}>
            <nav className={cn('links-list')}>
                {_createLinks(socialLinks2)}
            </nav>
        </div>
    </div>
)

export default M_SocialLinks_H

M_SocialLinks_H.propTypes = {
  mix: T.string, //BEM mixin from parent block
  type: T.oneOf([
    'section', // layout for sections
    'section2', // layout for sections
    'footer', // layour for footer
  ]).isRequired
};

const socialLinks = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/humaniq.co/'
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/Humaniq'
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/humaniq_com/'
  }
  /*,
   {
    name: 'github',
    url: 'https://github.com/humaniq',
  }*/
]

const socialLinks2 = [
  {
    name: 'youtube',
    url: 'https://www.youtube.com/channel/UCXatRidLHbngYUtF8JXICPA'
  },
  /*
  {
    name: 'slack',
    url: 'https://humaniq-co.slack.com/'
  },
  */
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/company/humaniq'
  },
  {
    name: 'telegram',
    url: 'https://t.me/HMQtrader'
  }
]

