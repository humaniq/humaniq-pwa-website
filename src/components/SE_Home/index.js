import React from 'react';
// import * as T from "prop-types";
import O_Teaser from 'O_Teaser'
import O_RecentNews from 'O_RecentNews'
// import O_HandyLinks from 'O_HandyLinks'
import O_StaticInfo from 'O_StaticInfo'
import O_Slider from 'O_Slider'
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Home')
import SE_HomeSubscribe from './subscribe.js'
import Meta from './meta'
const text_1 = { title: 'The Power of Blockchain.', description: ['Humaniq harnesses the power of Blockchain and AI technologies to break down barriers to earning, spending, and accessing finance. We put you in total control of all your transactions. Payments are entirely transparent and accessible at all times, and with our Blockchain-based app you can track all your funds.'] }
const text_2 = { title: 'Join our Community', description: ['Join the Humaniq Forum — a public discussion board for entrepreneurs around the world. Connect with other entrepreneurs, find beta users, learn from experienced founders, and get advice on how to overcome early challenges.', <br key="br_1"/>, <br key="br_2"/>, 'The Humaniq community brings together over one billion investors, accelerators, and companies into one global network. Connect with them and join our community.'] }
const text_3 = { title: 'Global Access, Local Impact', description: ['Humaniq brings isolated people into modern markets, creating a new source of growth for the world economy by impacting individual livers. Leveraging a widespread ambassador programme, Humaniq reaches even the most isolated regions in emerging countries, helping reduce hunger and poverty, while giving people the opportunity to save, lend and raise money.'], button: 'Use Cases' }

const mockSlides = [
  {
    title: 'From Here To Where? Bitcoin And The Future Of Cryptocurrency.',
    html: "<p><strong>Smart and powerful payments.</strong> We believe in transparency, and that is why Humaniq has designed the payment system using Blockchain technologies and bringing them into your pocket.</p>",
    img: '/img/placeholder.svg'
  },
  {
    title: 'Title 2',
    html: "<p><strong>Biometrics: our Passport to Inclusive Banking.</strong>We believe that your identity is the strongest password. Avoiding long passwords which can be lost or hacked. </p>",
    img: '/img/placeholder.svg'
  },
  {
    title: 'Title 3',
    html: "<p><strong>Digital Identity.</strong> Humaniq creates virtual profiles which evolve with people as they age. Therefore, the only thing you need to safely manage your financial assets is You, literally.</p>",
    img: '/img/placeholder.svg'
  }
]

const slider2 = [
  {
    title: 'Blockchain startup Humaniq joins Barclays’ Rise Community',
    html: "<p>Humaniq, a blockchain startup focused on financial inclusion, has announced that it is joining Barclays open innovation programme Rise in London. <a href='http://www.econotimes.com/Blockchain-startup-Humaniq-joins-Barclays-Rise-Community-651756' class='a-readmore'>Read me</a></p>",
    img: '/img/slider2/econotimes.png'
  },
  {
    title: 'BOScoin and Humaniq Cryptocurrency Partnership',
    html: "<p>Humaniq Blockchain-Ethereum Powered Startup Partners With South Korean Self-Evolving Cryptocurrency Platform BOScoin. <a href='https://www.newswire.com/news/boscoin-and-humaniq-cryptocurrency-partnership-19370714' class='a-readmore'>Read me</a></p>",
    img: '/img/slider2/prnewswire.png'
  },
  {
    title: 'Humaniq: Financial Inclusion of World’s 2 Billion Unbanked',
    html: "<p>Consider some of the services you probably rely on your bank to provide: safekeeping, payments processing, and the occasional credit. <a href='https://www.forbes.com/sites/sap/2017/05/24/how-technology-is-opening-the-way-for-financial-inclusion-of-worlds-2-billion-unbanked/#16dc961a4ebc' class='a-readmore'>Read me</a></p>",
    img: '/img/slider2/forbes.png'
  }
]
const SE_Home = () => (
  <div>
    <Meta />

    <O_Teaser theme='light'>
      <div className={cn('teaser')}>
        <div className={cn('teaser-title')}>Banking <span style={{whiteSpace: 'nowrap'}}>the Unbanked</span></div>
        <div className={cn('teaser-description')}>Humaniq is a simple and secure 4th generation mobile banking app, based on Ethereum Blockchain. Safe and strong, this tool of financial inclusion connects 2 billion unbanked people to the global economy.</div>
        <div className={cn('teaser-subscribe')}>
          <SE_HomeSubscribe onSubmit={ mail => alert(mail)} />
        </div>
      </div>
    </O_Teaser>
    <O_RecentNews/>
    {/*<O_HandyLinks/>*/}
    <O_StaticInfo {...{modificator: 'normal', text: text_1}}/>
    <O_Slider type='framed' slides={mockSlides}/>
    <O_StaticInfo {...{modificator: 'flip', text: text_2}}/>
    <O_Slider type="wide" slides={slider2}/>
    <O_StaticInfo {...{modificator: 'accent', text: text_3}}/>
  </div>
)

SE_Home.propTypes = {};

SE_Home.defaultProps = {}

export default SE_Home