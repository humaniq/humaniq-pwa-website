import React, { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import Header from './Header'
import ArticleContent from './ArticleContent'
import A_Container from 'A_Container'

const cn = cssClassName('PressArticle');

class PressArticle extends Component {

  render() {

    return(
      <section className={cn()}>
        <img className={cn('background-img')} src="/img/design-v2/sections/common/head.svg" />
        <A_Container>

          <Header
            mix={cn('header')}
            title={article.title}
            source={article.source}
            date={article.date}
          />

          <ArticleContent
            img={article.img}
            markup={article.markup}
          />

        </A_Container>
      </section>
    )
  }
}

const article = {
  source: 'Huffingtonpost.com',
  date: '05/16/2017',
  title: 'Humaniq opens access to its next-gen infrastructure in African countries',
  img: 'img/design-v2/press-articles/test.png',
  markup:
  '<p><b>London, Russia – December 18, 2017 –</b> Humaniq announces the launch of its Android app which will enable users to gain access to next-gen financial services. The application has a secure built-in messenger with end-to-end encryption and a mobile wallet with its own HMQ cryptocurrency.</p>' +
  '<p>The Humaniq app is purpose-built for people who are currently excluded from the world of21st Century financial services and technologies. It is designed to foster networking and collaboration and to provide more equitable access to financial services, cash transfers, and social programs.</p>' +
  '<p>User accounts are protected by a biometric-based, secure infrastructure accessed by authentication using face recognition. Also, a proof-of-human approach includes behavior analysis, including of user profile completion, and the frequency and number of sessions and other actions, offers additional security. Upon registration, the user is required to take a few photographs of themselves so they can enter the account without a password, using the face recognition system.</p>' +
  '<p>In addition, users earn HMQ coin cryptocurrency by securing bonuses for regularly confirming their accounts by updating their biometric data.</p>' +
  '<p>Before the application launch, the Humaniq team embarked on a regional expedition to test the pilot version of the app in real user scenarios. The expedition revealed further information on the demand for uses the app can provide, and potential users\' preferences, which led to refinements of the application which is now available in Uganda, Senegal, Zimbabwe, Tanzania, and Rwanda.</p>' +
  '<p>"Humaniq is a project with a strong social message. The ecosystem we have created and will continue to develop goes much further than simply providing access to next-gen financial services; our infrastructure will also include services in such spheres as humanitarian programs, freelance employment, and healthcare. At present we are also putting significant emphasis on integration with partnering projects. It is important to note that we have a great technical team and we are making progress with challenging tasks such as facilitating the provision of user data for those who have no any data yet,” - says Kirill Goryunov, CPO, Humaniq.</p>' +
  '<p>Humaniq’s tokens are currently traded on the world\'s largest crypto-exchanges like Bittrex, YoBit, Liqui, Decentrex and EtherData, and are available both for exchange into fiat and other cryptocurrencies. The idea of the Humaniq project is founded on the goal to create a next-generation financial model that includes the Banking 4.0. concept as well as socially-oriented services designed to solve people\'s daily problems in  developing countries. Humaniq\'s plans are to continue developing the ecosystem, which will start with making the API available to partners.</p>' +
  '<p><b>About Humaniq</b> Humaniq is a London-based Fintech firm that provides next generation financial services using its Blockchain-based mobile application to the unbanked and underprivileged in emerging economies globally. Humaniq is focused on worldwide financial inclusion by providing access to global markets, greater opportunities, and novel financial solutions using repurposed technologies for those gaining exposure to financial services for the first time.</p>'
}


export default PressArticle
