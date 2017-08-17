import React from 'react';
import Hero from './Hero'
import Meta from './meta'
import Info from './Info'
import InfoAnimation from './InfoAnimation'
import Gallery from './Gallery'
import A_P from 'A_P'
import Magazines from './Magazines'
import AnimatedHero from './AnimatedHero'

const SE_Home = ({animation}) => (
  <div>
    <Meta />
    {animation ?
      <AnimatedHero />
      : <Hero explorerData={explorerMock}/>
    }
    {/*<Gallery*/}
      {/*entities={links}*/}
      {/*type='links'*/}
      {/*title="Financial inclusion with Humaniq"*/}
    {/*/>*/}
    <Info
      type = 'moving-title'
      title = 'The power of Blockchain'
      link ={{
        to: '/hmq-explorer',
        text: 'Learn more about HMQ'
      }}
      img ={{
        src: 'img/illustrations/the-power-of-blockchain.svg',
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
        to: '/partners',
        text: 'Learn more about Humaniq partners'
      }}
    ><A_P type='third'>Join the Humaniq Forum — a public discussion board for entrepreneurs around the world. Connect with other entrepreneurs, find beta users, learn from experienced founders, and get advice on how to overcome early challenges.

      The Humaniq community brings together over one billion investors, accelerators, and companies into one global network. Connect with them and join our community.</A_P>
    </InfoAnimation>
    <Info
      type = 'moving-title'
      mobLast
      title = 'Global Access, Local Impact'
      link ={{
        to: '/use-cases',
        text: 'Learn more about Humaniq Use Cases'
      }}
      img ={{
        src: 'img/illustrations/global-access.svg',
        alt: 'Learn more about Humaniq Use Cases'
      }}
    >
      <A_P type='third'>Humaniq brings isolated people into modern markets, creating a new source of growth for the world economy by impacting individual lives. Leveraging a widespread ambassador program, Humaniq reaches even the most isolated regions in emerging countries, helping reduce hunger and poverty, while giving people the opportunity to save, lend and raise money.</A_P>
    </Info>
    <Magazines />
  </div>
)

export default SE_Home



const features = [
  {
    img: '/img/illustrations/free-payments.svg',
    title: 'Free Payments',
    subtitle: 'Send, receive and request funds with no transmission comission.'
  },
  {
    img: '/img/illustrations/biometrics-protected.svg',
    title: 'Biometrics Protected',
    subtitle: 'Lock money with your biometrics, avoiding obscure passwords.'
  },
  {
    img: '/img/illustrations/digital-identity.svg',
    title: 'Digital Identity',
    subtitle: 'Create a virtual identity that evolves with you and your funds.'
  },
  {
    img: '/img/illustrations/powerful-platform.svg',
    title: 'Powerful Platform',
    subtitle: 'Entirely transparent, free and accessible at all times.'
  },
  {
    img: '/img/illustrations/open-api.svg',
    title: 'Open API',
    subtitle: 'Create the next generation DApp to solve world’s biggest challenges.'
  },
  {
    img: '/img/illustrations/light-weight.svg',
    title: 'Light Weight',
    subtitle: 'No matter what internet connection you have, Humaniq finds a way.'
  }
]


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

// const links = [
//   {
//     img: '/img/illustrations/hmq-explorer.svg',
//     title: 'HMQ Explorer',
//     url: '#'
//   },
//   {
//     img: '/img/illustrations/humaniq-blog.svg',
//     title: 'Humaniq Blog',
//     url: '#'
//   },
//   {
//     img: '/img/illustrations/open-source.svg',
//     title: 'Open Source',
//     url: '#'
//   }
// ]
