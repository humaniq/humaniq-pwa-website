import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
const cn = cssClassName('SE_OpenSource');
import A_H from 'A_H';
import A_P from 'A_P';
import A_Link from 'A_Link';

const SE_OpenSource = () =>{
  return (
    <div>
      <A_Container type='equal'>
        <div className={cn('opensource')}>

          <A_Container type='section-clean'>
            <div className={cn('opensource-header')}>
              <div className={cn('opensource-header-image')}>
                <img src="/img/opensource/open-source-image.svg" alt='Humaniq OpenSource'/>
              </div>
              <div className={cn('opensource-header-description')}>
                <A_H type='hero'>Open Source</A_H>
                <A_P type='hero'>Humaniq relies on open-source software and likes to give back to the community. Check out the libararies we have built.</A_P>
              </div>
            </div>
          </A_Container>

          <A_Container type='section-clean'>
            <A_H type='section'>Released Libraries</A_H>
          </A_Container>

          <A_Container type='section-clean'>
            <div className={cn('opensource-container')}>
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

// import React, {Component} from 'react';
// import './styles.scss';
// import {cssClassName} from 'utils'
// import A_Container from 'A_Container'
// const cn = cssClassName('SE_OpenSource');
// import A_H from 'A_H';
// import A_P from 'A_P';
// import A_Link from 'A_Link';
//
//
//
// class SE_OpenSource extends Component {
//
//   getButton = ({name, url, type, imgSrc}) => {
//
// }
//

//
//                 <div className={cn('opensource-container-item')}>
//                   <div className={cn('opensource-container-item-image')}>
//                     <img src="/img/opensource/android.svg" alt='Humaniq Android' />
//                   </div>
//                   <div className={cn('opensource-container-text')}>
//                     <A_H type='openitem'>humaniq-android</A_H>
//                     <A_P type='fifth'>Humaniq mobile app alpha version. Used as a concept to show the work of a DApp.</A_P>
//                   </div>
//                 </div>
//
//                 <div className={cn('opensource-container-item')}>
//                   <div className={cn('opensource-container-item-image')}>
//                     <img src="/img/opensource/go.svg" alt='Humaniq Android' />
//                   </div>
//                   <div className={cn('opensource-container-text')}>
//                     <A_H type='openitem'>findface</A_H>
//                     <A_P type='fifth'>Golang client for FindFace cloud API. The wrapper was written for testing purposes.</A_P>
//                   </div>
//                 </div>
//
//                 <div className={cn('opensource-container-item')}>
//                   <div className={cn('opensource-container-item-image')}>
//                     <img src="/img/opensource/go.svg" alt='Humaniq Android' />
//                   </div>
//                   <div className={cn('opensource-container-text')}>
//                     <A_H type='openitem'>kairgo</A_H>
//                     <A_P type='fifth'>Golang client for Kairos cloud API. The wrapper was written for testing purposes.</A_P>
//                   </div>
//                 </div>
//
//                 <div className={cn('opensource-container-item')}>
//                   <div className={cn('opensource-container-item-image')}>
//                     <img src="/img/opensource/js.svg" alt='Humaniq Android' />
//                   </div>
//                   <div className={cn('opensource-container-text')}>
//                     <A_H type='openitem'>emoji-auth</A_H>
//                     <A_P type='fifth'>Graphic-pin authorization for the second step verification in your application.</A_P>
//                   </div>
//                 </div>
//
//                 <div className={cn('opensource-container-item')}>
//                   <div className={cn('opensource-container-item-image')}>
//                     <img src="/img/opensource/js.svg" alt='Humaniq Android' />
//                   </div>
//                   <div className={cn('opensource-container-text')}>
//                     <A_H type='openitem'>ico-contract</A_H>
//                     <A_P type='fifth'>Humaniq smart contract. Was used during the ICO process.</A_P>
//                   </div>
//                 </div>
//
//                 <div className={cn('opensource-container-item')}>
//                   <div className={cn('opensource-container-item-image')}>
//                     <img src="/img/opensource/js.svg" alt='Humaniq Android' />
//                   </div>
//                   <div className={cn('opensource-container-text')}>
//                     <A_H type='openitem'>ico-website</A_H>
//                     <A_P type='fifth'>Humaniq ICO website v0. Was used during the ICO process.</A_P>
//                   </div>
//                 </div>
//
//               </div>
//             </A_Container>
//
//             <A_Container type='section-clean'>
//               <div className={cn('opensource-help')}>
//                 <A_H type='section'>Help us Develop</A_H>
//                 <A_P type='second'>Join Humaniq ever growing network. Get in touch if you would like to code with us.</A_P>
//                 <A_P type='hero'>
//                   <A_Link to='mailto:info@humaniq.com' target='_blank' type='primary'>Drop off your information here »</A_Link>
//                 </A_P>
//               </div>
//             </A_Container>
//
//
//           </div>
//         </A_Container>
//       </div>
//     )
//   }
// }
//
//
// export default SE_OpenSource;
//
