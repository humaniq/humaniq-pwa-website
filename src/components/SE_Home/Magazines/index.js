import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HomeMagazines')
import A_link from 'A_Link'
import A_Image from 'A_Image'
import A_Container from 'A_Container'
import A_H from 'A_H'

const magazines = [
  {
    img: {
      alt: 'Forbes',
      src: '/img/magazines-logos/forbes@2x.png'
    },
    to: 'http://www.forbes.com/sites/haroldstark/2017/04/21/from-here-to-where-bitcoin-and-the-future-of-cryptocurrency/#771111f14367'
  },
  {
    img: {
      alt: 'Richtopia',
      src: '/img/magazines-logos/cointelegraph@2x.jpg'
    },
    to: 'https://cointelegraph.com/news/ethereum-based-humaniq-to-deliver-banking-40-to-2-bln-unbanked'
  },
  {
    img: {
      alt: 'TNW',
      src: '/img/magazines-logos/tnw@2x.png'
    },
    to: 'https://tnw.to/2pHeBlt'
  },
  {
    img: {
      alt: 'Nasdaq',
      src: '/img/magazines-logos/nasdaq@2x.png'
    },
    to: 'http://www.nasdaq.com/article/humaniq-aims-to-tackle-barriers-to-economic-inclusion-with-blockchain-app-cm764760'
  },
  {
    img: {
      alt: 'Yahoo',
      src: '/img/magazines-logos/yahoo@2x.png'
    },
    to: 'http://finance.yahoo.com/news/humaniq-blockchain-financial-platform-unbanked-185522211.html'
  },
  {
    img: {
      alt: 'The Huffington Post',
      src: '/img/magazines-logos/thp@2x.png'
    },
    to: 'http://www.huffingtonpost.com/entry/tackling-financial-exclusion-with-biometric-technology_us_591af1ace4b03e1c81b008bc?ncid=engmodushpmg00000004'
  }
]

const SE_HomeMagazines = () =>{
  const renderedMagazines = magazines.map( ({img, to}) => {
    return(
      <div key={"key_" + img.alt} className={cn('item')}>
        <A_link to={to} external >
          <A_Image src={img.src} alt={img.alt} link />
        </A_link>
      </div>
    )
  })
  return (
    <div className={cn('root')}>
      <A_Container type="equal">
          <A_H type='section-c' >As seen at:</A_H>
          <div className={cn('magazines')}>
            {renderedMagazines}
          </div>
      </A_Container>
    </div>
  )
}

export default SE_HomeMagazines