import React from 'react';
import Hero from './Hero'
// import * as T from "prop-types";

// import O_Teaser from 'O_Teaser'
// import O_RecentNews from 'O_RecentNews'
// import O_HandyLinks from 'O_HandyLinks'
// import O_StaticInfo from 'O_StaticInfo'
// import O_Slider from 'O_Slider'
// import SE_HomeSubscribe from './subscribe.js'
// import './styles.scss';
// import {cssClassName} from 'utils'
// const cn = cssClassName('SE_Home')
import Meta from './meta'
import Info from './Info'
import InfoAnimation from './InfoAnimation'
import Gallery from './Gallery'
import A_P from 'A_P'
import Magazines from './Magazines'


// const text_1 = { title: 'The Power of Blockchain.', description: ['Humaniq harnesses the power of Blockchain and AI technologies to break down barriers to earning, spending, and accessing finance. We put you in total control of all your transactions. Payments are entirely transparent and accessible at all times, and with our Blockchain-based app you can track all your funds.'] }
// const text_2 = { title: 'Join our Community', description: ['Join the Humaniq Forum — a public discussion board for entrepreneurs around the world. Connect with other entrepreneurs, find beta users, learn from experienced founders, and get advice on how to overcome early challenges.', <br key="br_1"/>, <br key="br_2"/>, 'The Humaniq community brings together over one billion investors, accelerators, and companies into one global network. Connect with them and join our community.'] }
// const text_3 = { title: 'Global Access, Local Impact', description: ['Humaniq brings isolated people into modern markets, creating a new source of growth for the world economy by impacting individual livers. Leveraging a widespread ambassador programme, Humaniq reaches even the most isolated regions in emerging countries, helping reduce hunger and poverty, while giving people the opportunity to save, lend and raise money.'], button: 'Use Cases' }
//
// const mockSlides = [
//   {
//     title: 'From Here To Where? Bitcoin And The Future Of Cryptocurrency.',
//     html: "<p><strong>Smart and powerful payments.</strong> We believe in transparency, and that is why Humaniq has designed the payment system using Blockchain technologies and bringing them into your pocket.</p>",
//     img: '/img/placeholder.svg'
//   },
//   {
//     title: 'Title 2',
//     html: "<p><strong>Biometrics: our Passport to Inclusive Banking.</strong>We believe that your identity is the strongest password. Avoiding long passwords which can be lost or hacked. </p>",
//     img: '/img/placeholder.svg'
//   },
//   {
//     title: 'Title 3',
//     html: "<p><strong>Digital Identity.</strong> Humaniq creates virtual profiles which evolve with people as they age. Therefore, the only thing you need to safely manage your financial assets is You, literally.</p>",
//     img: '/img/placeholder.svg'
//   }
// ]
//
// const slider2 = [
//   {
//     title: 'Blockchain startup Humaniq joins Barclays’ Rise Community',
//     html: "<p>Humaniq, a blockchain startup focused on financial inclusion, has announced that it is joining Barclays open innovation programme Rise in London. <a href='http://www.econotimes.com/Blockchain-startup-Humaniq-joins-Barclays-Rise-Community-651756' class='a-readmore'>Read me</a></p>",
//     img: '/img/slider2/econotimes.png'
//   },
//   {
//     title: 'BOScoin and Humaniq Cryptocurrency Partnership',
//     html: "<p>Humaniq Blockchain-Ethereum Powered Startup Partners With South Korean Self-Evolving Cryptocurrency Platform BOScoin. <a href='https://www.newswire.com/news/boscoin-and-humaniq-cryptocurrency-partnership-19370714' class='a-readmore'>Read me</a></p>",
//     img: '/img/slider2/prnewswire.png'
//   },
//   {
//     title: 'Humaniq: Financial Inclusion of World’s 2 Billion Unbanked',
//     html: "<p>Consider some of the services you probably rely on your bank to provide: safekeeping, payments processing, and the occasional credit. <a href='https://www.forbes.com/sites/sap/2017/05/24/how-technology-is-opening-the-way-for-financial-inclusion-of-worlds-2-billion-unbanked/#16dc961a4ebc' class='a-readmore'>Read me</a></p>",
//     img: '/img/slider2/forbes.png'
//   }
// ]



const explorerMock = [
  {
    title: 'Token Supply',
    data: '184,190,414 HMQ ($29,807,166.32)'
  },
  {
    title: 'Value per Token',
    data: '$0.1618  (0.000610 ETH)'
  },
  {
    title: 'Token Holders',
    data: '4419 addresses'
  },
  {
    title: 'Total Transactions',
    data: '24,801'
  },
]

const links = [
  {
    img: '/img/placeholder-squared.svg',
    title: 'HMQ Explorer',
    url: '#'
  },
  {
    img: '/img/placeholder-squared.svg',
    title: 'Humaniq Blog',
    url: '#'
  },
  {
    img: '/img/placeholder-squared.svg',
    title: 'Open Source',
    url: '#'
  }
]

const features = [
  {
    img: '/img/placeholder-squared.svg',
    title: 'Free Payments',
    subtitle: 'Send, receive and request funds with no transmission comission.'
  },
  {
    img: '/img/placeholder-squared.svg',
    title: 'Biometrics Protected',
    subtitle: 'Lock money with your biometrics, avoiding obscure passwords.'
  },
  {
    img: '/img/placeholder-squared.svg',
    title: 'Digital Identity',
    subtitle: 'Create a virtual identity that evolves with you and your funds.'
  },
  {
    img: '/img/placeholder-squared.svg',
    title: 'Powerful Platform',
    subtitle: 'Entirely transparent, free and accessible at all times.'
  },
  {
    img: '/img/placeholder-squared.svg',
    title: 'Open API',
    subtitle: 'Create the next generation DApp to solve world’s biggest challenges.'
  },
  {
    img: '/img/placeholder-squared.svg',
    title: 'Light Weight',
    subtitle: 'No matter what internet connection you have, Humaniq finds a way.'
  }
]
const SE_Home = () => (
  <div>
    <Meta />
    <Hero explorerData={explorerMock}/>
    <Gallery
      entities={links}
      type='links'
      title="Banking with HMQ"
    />
    <Info
      type = 'moving-title'
      title = 'The power of Blockchain'
      link ={{
        to: '#',
        text: 'Learn more about Humaniq partners'
      }}
      img ={{
        src: 'img/placeholder-1.svg',
        alt: 'Learn more about Humaniq partners'
      }}
    ><A_P type='third'>Join the Humaniq Forum — a public discussion board for entrepreneurs around the world. Connect with other entrepreneurs, find beta users, learn from experienced founders, and get advice on how to overcome early challenges.

      The Humaniq community brings together over one billion investors, accelerators, and companies into one global network. Connect with them and join our community.</A_P>
    </Info>
    <Gallery
      entities={features}
      type='not-links'
      title="What makes Humaniq so special?"
    />
    <InfoAnimation
      title = 'Join our Community'
      link ={{
        to: '#',
        text: 'Learn more about Humaniq partners'
      }}
    ><A_P type='third'>Join the Humaniq Forum — a public discussion board for entrepreneurs around the world. Connect with other entrepreneurs, find beta users, learn from experienced founders, and get advice on how to overcome early challenges.

      The Humaniq community brings together over one billion investors, accelerators, and companies into one global network. Connect with them and join our community.</A_P>
    </InfoAnimation>
    <Info
      type = 'hidding-img'
      title = 'Global Access, Local Impact'
      link ={{
        to: '#',
        text: 'Learn more about Humaniq Use Cases'
      }}
      img ={{
        src: 'img/placeholder-1.svg',
        alt: 'Learn more about Humaniq Use Cases'
      }}
    >
      <A_P type='third'>Humaniq brings isolated people into modern markets, creating a new source of growth for the world economy by impacting individual livers. Leveraging a widespread ambassador programme, Humaniq reaches even the most isolated regions in emerging countries, helping reduce hunger and poverty, while giving people the opportunity to save, lend and raise money.</A_P>
    </Info>
    <Magazines />
    {/*<O_RecentNews/>*/}
    {/*/!*<O_HandyLinks/>*!/*/}
    {/*<O_StaticInfo {...{modificator: 'normal', text: text_1}}/>*/}
    {/*<O_Slider type='framed' slides={mockSlides}/>*/}
    {/*<O_StaticInfo {...{modificator: 'flip', text: text_2}}/>*/}
    {/*<O_Slider type="wide" slides={slider2}/>*/}
    {/*<O_StaticInfo {...{modificator: 'accent', text: text_3}}/>*/}
  </div>
)

SE_Home.propTypes = {};

SE_Home.defaultProps = {}

export default SE_Home