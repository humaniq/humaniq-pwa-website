import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'

const cn = cssClassName('SE_OpenSource');
import A_H from 'A_H';
import A_P from 'A_P';
import A_Link from 'A_Link';
import O_TextUsHere from 'O_TextUsHere'

const SE_OpenSource = () => {

  const renderedLinks = libraries.map(({name, description, url, type, imgSrc}) => {
    return (
      <div className={cn('item')} key = {'key_' + name } >
        <A_Link to={url} type="block" external>
          <div className={cn('item-image', {type})}>
            <img src={imgSrc} alt='Humaniq Android'/>
          </div>
          <div className={cn('item-text')}>
            <A_H type='openitem'>{name}</A_H>
            <A_P type='sixth'>{description}</A_P>
          </div>
        </A_Link>
      </div>
    )
  })

  renderedLinks.push(<div className={cn('item-empty')} key = {'key_empty' } />)
  return (
    <div>
      <A_Container type='section-clean'>
        <div className={cn('header')}>
          <div className={cn('header-image')}>
            <img src="/img/opensource/open-source-image.svg" alt='Humaniq OpenSource'/>
          </div>
          <div className={cn('header-description')}>
            <A_H type='hero'>Open Source</A_H>
            <A_P type='hero'>Humaniq relies on open-source software and likes to give back to the community. Check out
              the libraries we have built.</A_P>
          </div>
        </div>
        <A_H type='section'>Released Libraries</A_H>

        <div className={cn('list')}>
          {renderedLinks}
        </div>
      </A_Container>
      <O_TextUsHere
        {...{
          title: 'Help us Develop',
          text: 'Join Humaniq's ever growing network. Get in touch if you would like to code with us.',
          link: {
            linkText: 'Drop off your information',
            url: 'mailto:info@humaniq.com'
          }
        }}
      />
    </div>
  )
}

export default SE_OpenSource

const libraries = [
  {
    name: 'humaniq-android',
    description: 'Humaniq mobile app alpha version. Used as a concept to show the work of a DApp.',
    url: 'https://github.com/humaniq/humaniq-android',
    type: 'android',
    imgSrc: '/img/opensource/android.svg'
  },
  {
    name: 'findface',
    description: 'Golang client for FindFace cloud API. The wrapper was written for testing purposes.',
    url: 'https://github.com/humaniq/findface',
    type: 'go',
    imgSrc: '/img/opensource/go.svg'
  },
  {
    name: 'kairgo',
    description: 'Golang client for Kairos cloud API. The wrapper was written for testing purposes.',
    url: 'https://github.com/humaniq/kairgo',
    type: 'go',
    imgSrc: '/img/opensource/go.svg'
  },
  {
    name: 'emoji-auth',
    description: 'Graphic-pin authorization for the second step verification in your application.',
    url: 'https://github.com/humaniq/emoji-auth',
    type: 'js',
    imgSrc: '/img/opensource/js.svg'
  },
  {
    name: 'ico-contract',
    description: 'Humaniq smart contract. Was used during the ICO process.',
    url: 'https://github.com/humaniq/ico-contract',
    type: 'js',
    imgSrc: '/img/opensource/js.svg'
  },
  {
    name: 'ico-website',
    description: 'Humaniq ICO website v0. Was used during the ICO process.',
    url: 'https://github.com/humaniq/ico-website',
    type: 'js',
    imgSrc: '/img/opensource/js.svg'
  },
  {
    name: 'humaniq-pwa-website',
    description: 'New Humaniq website built under PWA technology.',
    url: 'https://github.com/humaniq/humaniq-pwa-website',
    type: 'js',
    imgSrc: '/img/opensource/js.svg'
  },
  {
    name: 'react-native-android-library-humaniq-api',
    description: 'React Native wrapper for Humaniq LITE application',
    url: 'https://github.com/humaniq/react-native-android-library-humaniq-api',
    type: 'android',
    imgSrc: '/img/opensource/android.svg'
  }
]
