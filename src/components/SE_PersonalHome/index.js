import React from 'react';
import O_Footer from 'O_Footer'
import Gallery from './Gallery'
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_PersonalHome')
import history from 'history'
import A_Image from 'A_Image';

import A_P from 'A_P'

const features = [
  {
    img: '/img/illustrations/free-payments.svg',
    height: 260,
    title: 'Free Payments',
    subtitle: 'Send, receive and request funds with no transmission comission.'
  },
  {
    img: '/img/illustrations/biometrics-protected.svg',
    height: 260,
    title: 'Biometrics Protected',
    subtitle: 'Lock money with your biometrics, avoiding obscure passwords.'
  },
  {
    img: '/img/illustrations/digital-identity.svg',
    height: 260,
    title: 'Digital Identity',
    subtitle: 'Create a virtual identity that evolves with you and your funds.'
  },
  {
    img: '/img/illustrations/powerful-platform.svg',
    height: 260,
    title: 'Powerful Platform',
    subtitle: 'Entirely transparent, free and accessible at all times.'
  },
  {
    img: '/img/illustrations/open-api.svg',
    height: 260,
    title: 'Open API',
    subtitle: 'Create the next generation DApp to solve world’s biggest challenges.'
  },
  {
    img: '/img/illustrations/light-weight.svg',
    height: 260,
    title: 'Light Weight',
    subtitle: 'No matter what internet connection you have, Humaniq finds a way.'
  }
]

//'/img/1234.png'
import A_Btn from 'A_Btn'

const SE_PersonalHome = ({
                           // invitationCode,
                           name:{first_name, last_name},
                           phone_number,
                           photo_url
  }) => (
    <div>
      <header className={cn('header')}>
        <div className={cn('header-inner')}>
          <section className={cn('info')}>
            <div className={cn('phone')}>
              <A_Image src={photo_url} type ='avatar' alt={first_name + ' ' + last_name} />

            </div>
            <div className={cn('phone')}>
              <A_P type='third-center_white'>{phone_number}</A_P>
            </div>
            <div className={cn('description')}>
              <A_P type='third-center_white'>Invites you to join Humaniq. As soon as you complete the registration process, you will get $1 USD.</A_P>
            </div>
          </section>
          <div className={cn('btn')}>
            <A_Btn
              onClick={() => history.push(`/registration`)}
              type='personal-nav-btn'
            >Go to registration</A_Btn>
          </div>

        </div>
      </header>
      <Gallery
        entities={features}
        type='not-links'
        title="What makes Humaniq so special?"
      />
      <O_Footer isMenuOpened={false} externalLinks />
    </div>
)

export default SE_PersonalHome