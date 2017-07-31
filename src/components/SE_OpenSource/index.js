import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
const cn = cssClassName('SE_OpenSource');
import A_H from 'A_H';
import A_P from 'A_P';
import A_Link from 'A_Link';

const SE_OpenSource = () =>{
  
  const renderedLinks = libraries.map( ({name, description, url, type, imgSrc}) => {
    return(
      <A_Link to={url} type="block" >
        <div className={cn('container-item', {type})} key={'key_' + name}>
          <div className={cn('container-item-image')}>
            <img src={imgSrc} alt='Humaniq Android' />
          </div>
          <div className={cn('container-text')}>
            <A_H type='openitem'>{name}</A_H>
            <A_P type='fifth'>{description}</A_P>
          </div>
        </div>
      </A_Link>
    )
  })

  return (
    <div>
      <A_Container type='equal'>
        <div className={cn('opensource')}>

          <A_Container type='section-clean'>
            <div className={cn('header')}>
              <div className={cn('header-image')}>
                <img src="/img/opensource/open-source-image.svg" alt='Humaniq OpenSource'/>
              </div>
              <div className={cn('header-description')}>
                <A_H type='hero'>Open Source</A_H>
                <A_P type='hero'>Humaniq relies on open-source software and likes to give back to the community. Check out the libararies we have built.</A_P>
              </div>
            </div>
          </A_Container>

          <A_Container type='section-clean'>
            <A_H type='section'>Released Libraries</A_H>
          </A_Container>

          <A_Container type='section-clean'>
            <div className={cn('container')}>
              {renderedLinks}
            </div>
          </A_Container>

          <A_Container type='section-clean'>
            <div className={cn('help')}>
              <A_H type='section'>Help us Develop</A_H>
              <A_P type='second'>Join Humaniq ever growing network. Get in touch if you would like to code with us.</A_P>
              <A_P type='hero'>
                <A_Link to='mailto:info@humaniq.com' target='_blank' type='primary'>Drop off your information here »</A_Link>
              </A_P>
            </div>
          </A_Container>
        </div>
      </A_Container>
    </div>
  )
}

export default SE_OpenSource

const libraries = [
  {
    name: 'humaniq-android',
    description: 'Humaniq mobile app alpha version. Used as a concept to show the work of a DApp.',
    url: '',
    type: 'android',
    imgSrc: '/img/opensource/android.svg'
  },
  {
    name: 'findface',
    description: 'Golang client for FindFace cloud API. The wrapper was written for testing purposes.',
    url: '',
    type: 'go',
    imgSrc: '/img/opensource/go.svg'
  },
  {
    name: 'kairgo',
    description: 'Golang client for Kairos cloud API. The wrapper was written for testing purposes.',
    url: '',
    type: 'go',
    imgSrc: '/img/opensource/go.svg'
  },
  {
    name: 'emoji-auth',
    description: 'Graphic-pin authorization for the second step verification in your application.',
    url: '',
    type: 'js',
    imgSrc: '/img/opensource/js.svg'
  },
  {
    name: 'ico-contract',
    description: 'Humaniq smart contract. Was used during the ICO process.',
    url: '',
    type: 'js',
    imgSrc: '/img/opensource/js.svg'
  },
  {
    name: 'ico-website',
    description: 'Humaniq ICO website v0. Was used during the ICO process.',
    url: '',
    type: 'js',
    imgSrc: '/img/opensource/js.svg'
  },
]