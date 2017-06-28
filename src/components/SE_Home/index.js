import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Home')
import O_Teaser from 'O_Teaser'
import O_RecentNews from 'O_RecentNews'
import O_HandyLinks from 'O_HandyLinks'
import O_StaticInfo from 'O_StaticInfo'
import O_Slider from 'O_Slider'

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

const SE_Home = () => (
  <div className={cn()}>
    <O_Teaser/>
    <O_RecentNews/>
    <O_HandyLinks/>
    <O_StaticInfo {...{modificator: 'normal', text: text_1}}/>
    <O_Slider type='framed' slides={mockSlides}/>
    <O_StaticInfo {...{modificator: 'flip', text: text_2}}/>
    <O_Slider type="wide" slides={mockSlides}/>
    <O_StaticInfo {...{modificator: 'accent', text: text_3}}/>
  </div>
)

SE_Home.propTypes = {};

SE_Home.defaultProps = {}

export default SE_Home