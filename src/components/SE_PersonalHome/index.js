import React from 'react';

import Gallery from './Gallery'
import Footer from './Footer'


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
const SE_Home = () => (
  <div>
    <Gallery
      entities={features}
      type='not-links'
      title="What makes Humaniq so special?"
    />
    <Footer isMenuOpened={false}/>

  </div>
)

export default SE_Home