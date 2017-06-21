import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Home')
import O_Teaser from 'O_Teaser'
import O_RecentNews from 'O_RecentNews'
import O_HandyLinks from 'O_HandyLinks'
import O_StaticInfo from 'O_StaticInfo'
import O_StaticSlider from 'O_StaticSlider'
import O_SimpleSlider from 'O_SimpleSlider'

const text_1 = { title: 'The Power of Blockchain.', description: 'Humaniq harnesses the power of Blockchain and AI technologies to break down barriers to earning, spending, and accessing finance. We put you in total control of all your transactions. Payments are entirely transparent and accessible at all times, and with our Blockchain-based app you can track all your funds.' }
const text_2 = { title: 'Join our Community', description: 'Join the Humaniq Forum — a public discussion board for entrepreneurs around the world. Connect with other entrepreneurs, find beta users, learn from experienced founders, and get advice on how to overcome early challenges. The Humaniq community brings together over one billion investors, accelerators, and companies into one global network. Connect with them and join our community.' }
const text_3 = { title: 'Global Access, Local Impact', description: 'Humaniq brings isolated people into modern markets, creating a new source of growth for the world economy by impacting individual livers. Leveraging a widespread ambassador programme, Humaniq reaches even the most isolated regions in emerging countries, helping reduce hunger and poverty, while giving people the opportunity to save, lend and raise money.', button: 'Use Cases' }

const SE_Home = () => (
  <div className={cn()}>
    <O_Teaser/>
    <O_RecentNews/>
    <O_HandyLinks/>
    <O_StaticInfo {...{text: text_1}}/>
    <O_StaticSlider/>
    <O_StaticInfo {...{modificator: 'flip', text: text_2}}/>
    <O_SimpleSlider/>
    <O_StaticInfo {...{modificator: 'accent', text: text_3}}/>
  </div>
)

SE_Home.propTypes = {};

SE_Home.defaultProps = {}

export default SE_Home