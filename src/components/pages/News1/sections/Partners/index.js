import React from 'react'
import A_Title from 'A_Title_H'
import SectionCounter from '../common/SectionCounter/index.js'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('SE_Partners')

const handleLinkClick = (name) => {
  if (window.ga) window.ga('send', 'event', 'other', 'partners-click-' + name);
};



const _createLinks = (links) => (
    links.map(({href, img, name}, index) => {
      var divStyle = {
        backgroundImage: 'url(' + img + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      };
      console.log(divStyle);
      return (
                <div className='item' key={`partner-${index + 1}`}>
                    { href &&
                    <a href={href} className='wrap' target='_blank'  onClick={() => {handleLinkClick(name)}}>
                        <img src={img}/>
                    </a>
                    }
                    {!href &&
                    <div className={'wrap'}>
                        <img src={img}/>
                    </div>
                    }
                </div>)

    }
    )
);


const SE_Partners = ({ mix }) => (
  <section className={cn([mix])}>
    <div className={cn('content')}>
      <A_Title mix={cn('title')} type="section" theme="dark">
          Humaniq Partners
      </A_Title>
        <div className={'partners-list'}>
            {_createLinks(infoColumns)}
        </div>
    </div>
    <SectionCounter sectionNum={8} theme="bright" />
  </section>
)

export default SE_Partners

const infoColumns = [
  {
    img: '/img/partners/un.png',
    href: "https://www.unglobalcompact.org",
    name: 'un'
  },
  {
    img: '/img/partners/l39.png',
    href: "https://www.level39.co",
    name: 'l39'
  },
  {
    img: '/img/partners/rise.png',
    href: "https://thinkrise.com",
    name: 'rise'
  },
  {
    img: '/img/partners/coinfirm.png',
    href: "https://www.coinfirm.io",
    name: 'coinfirm'
  },
  {
    img: '/img/partners/transbox.png',
    href: "http://www.transbox.xyz",
    name: 'transbox'
  },
  {
    img: '/img/partners/bi.png',
    href: "https://www.biometricsinstitute.org",
    name: 'bi'
  },
  {
    img: '/img/partners/jamii.png',
    href: "",
    name: 'jamii'
  },
  {
    img: '/img/partners/ff.png',
    href: "http://futurefintech.org",
    name: 'ff'
  }
]
