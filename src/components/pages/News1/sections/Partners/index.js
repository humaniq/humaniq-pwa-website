import React from 'react'
import A_Title from 'A_Title_H'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('SE_Partners')

const handleLinkClick = (name) => {
  if (window.ga) window.ga('send', 'event', 'other', 'partners-click-' + name);
};

function createMarkup(input) {
  return {__html: input};
}


const _createLinks = (links) => (
    links.map(({href, img, name, more}, index) => {
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
                        <div className={'popup'} dangerouslySetInnerHTML={createMarkup(more)}/>
                    </a>
                    }
                    {!href &&
                    <div className={'wrap'}>
                        <img src={img}/>
                        <div className={'popup'} dangerouslySetInnerHTML={createMarkup(more)}/>
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
  </section>
)

export default SE_Partners

const infoColumns = [
  {
    img: '/img/partners/un.png',
    href: "https://www.unglobalcompact.org",
    name: 'un',
    more: "The visionary who launched the <b>UN Global Compact</b> and inspired the world’s largest corporate sustainability initiative."
  },
  {
    img: '/img/partners/l39.png',
    href: "https://www.level39.co",
    name: 'l39',
    more: "<b>Level39</b> is a community of 1,250 leaders in cybersecurity, fintech and retail tech"
  },
  {
    img: '/img/partners/rise.png',
    href: "https://thinkrise.com",
    name: 'rise',
    more: "<b>Rise</b> is a community of startups & corporates creating the future of financial services."

  },
  {
    img: '/img/partners/coinfirm.png',
    href: "https://www.coinfirm.io",
    name: 'coinfirm',
    more: "The <b>Coinfirm</b> platform provides and easy to use solution with valuable structured data that puts entities on the safe side in terms of regulatory and fraud risk."

  },
  {
    img: '/img/partners/transbox.png',
    href: "http://www.transbox.xyz",
    name: 'transbox',
    more: "<b>Transbox</b> is online communication and data security specialised company."

  },
  {
    img: '/img/partners/bi.png',
    href: "https://www.biometricsinstitute.org",
    name: 'bi',
    more: "The mission of the <b>Biometrics Institute</b> is to promote the responsible use of biometrics in an independent and impartial international forum for biometric users and other interested parties."

  },
  {
    img: '/img/partners/jamii.png',
    href: "http://www.jamiiafrica.com/",
    name: 'jamii',
    more: "<b>Jamii Africa</b> is mobile micro-health insurance for the informal sector."

  },
  {
    img: '/img/partners/ff.png',
    href: "http://futurefintech.org",
    name: 'ff',
    more: "<b>Future Fintech</b> are connecting young businesses to the global community of VC and tech startups, giving access to the best tested cases, wide range of sector specific expertise and pinpoint advices."

  }
]
