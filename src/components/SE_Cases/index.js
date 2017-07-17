import React from 'react';
// import * as T from "prop-types";
import A_Container from 'A_Container'
import O_Hero from 'O_Hero'
import A_H from 'A_H'
import A_P from 'A_P'
import Case from './Case'
import Meta from './meta'
import A_Link from 'A_Link'
import {convert} from 'utils'
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Cases')

const cases = [
  {
    title: 'Money Transfers',
    img: '/img/mock/holder_400x280.png',
    introduction: 'Humaniq harnesses the power of Blockchain and AI technologies to break down barriers to earning, spending, and accessing finance. We put you in total control of all your transactions. Payments are entirely transparent and accessible at all times, and with our Blockchain-based app you can track all your funds.',
    solution:'Our project uses Blockchain technology that frees people to make direct payments that bypass go-betweens. To send money, you simply log-in to our app, which uses facial recognition technology to ensure that transactions are secure. You can then replenish your Humaniq balance, and transfer Humaniq tokens to other users anywhere on Earth. With Humaniq’s almost zero-cost transactions, micropayments become easy-to-make and affordable. You also avoid the cost of transferring funds from one currency to another - another reason to take control of your money with Humaniq.'
  },
  {
    title: 'Remote work',
    img: '/img/mock/holder_400x280.png',
    introduction: 'How to access labour markets where there are more jobs, without leaving the home and people you love? Millions of people in under-developed regions are working for $2 or less per day. Living there, you have few opportunities for better prospects and a better life. But the alternative of emigrating to a country with more jobs can be a difficult choice, and hard to achieve.',
    solution:'With the Humaniq app, everyone can now work and earn decent amounts of money online. Our app collects simple tasks companies need people to execute from partners such as Amazon Mechanical Turk. After you log-in and your identity is confirmed, you can access these tasks in a special ‘Earn’ tab. They are tasks that require no special skills, and help companies’ research in image and speech recognition technologies. Some people have this way earned up to $30 a day, giving people using our app a new route out of poverty. '
  },
  {
    title: 'Aid without corruption',
    img: '/img/mock/holder_400x280.png',
    introduction: 'Every year developing countries receive billions of dollars of financial aid from wealthier nations, but unfortunately, a significant portion of this funding is spent inappropriately — essentially wasted. According to the UN, the share of the funding that is lost reaches as much as 30% in some regions. Most often this happens when transferring money to the victims of natural disasters.',
    solution:'Making sure that aid payments reach those who need them is another essential, life-changing task Humaniq can perform. Using the Blockchain technology, funds can be easily transferred to intended recipients in a way that can be confirmed. After requested assistance is provided, a special mark appears both in the Blockchain and in the Humaniq app, to prevent double spending. Thanks to the complete transparency of Humaniq Blockchain, tracking the flow of funds has never been such an easy task. And by making payments transparent, we can give people new confidence that aid organisations can effectively distribute emergency aid.'
  },
  {
    title: 'Direct lending to entrepreneurs',
    img: '/img/mock/holder_400x280.png',
    introduction: 'Low-income people are often unable to access finance needed to start up a business. Relatively small sums would give them a route to earn their way out of poverty. But while micro-finance can tackle this, such lenders rely on field partners to distribute the funds. This makes accessing micro-finance harder, and the field partners charge interest of up to 35%, making it needlessly more expensive.',
    solution:'We truly believe to help unbanked people improve their life, they need a way to invest in their future so they can achieve a higher standard of living. We can support lending by cutting out the middle-men and bringing lenders and borrowers together. To do this, we are developing a Business in-app feature to let Humaniq’s partners  lend and donate and app users to apply for funds. This will widen access to microfinance faster than can be achieved through branches and field partners. And it will make lending quicker and cheaper - with interest less than 10%, and transfers of funds at almost zero-cost. '
  },
  {
    title: 'Finance for everyone',
    img: '/img/mock/holder_400x280.png',
    introduction: 'The World Bank estimates that some 1.5 billion people in the world cannot benefit effectively from society the way they should be able to. In African states, more than 55% of the population have no formaI IDs  and, in many cases, these people effectively do not exist for targeted social programs. Women in such regions used to have even less access to financial services such as credit lines and formal salaries. ',
    solution:'Humaniq plans to help сreate gender equality by connecting the female population to 4.0 banking services.  Anyone — young, old, male or female — can receive loans or donations in Humaniq This will improve healthcare, income, and education. It will also remove the barriers to women registering bank account. Women will have more control over their finances and business. For oppressed women and for others without any access to banks, the barriers to financial account registration will disappear. People will gain control over their funds and their businesses.'
  },
  {
    title: 'Smartphones affordable for everyone',
    img: '/img/mock/holder_400x280.png',
    introduction: 'Humaniq’s aim is to bring cutting-edge Blockchain technologies to the 2 billion unbanked people in the world. Many do not even have access to a smartphone. They are shut out from the 21st Century economy, and from all the opportunities for learning, connecting and earning that smartphones provide. While costs are coming down, a smartphone that can perform mobile wallet functions still cost as much as $20, often out of the reach of the unbanked, who earn $2.50 or less a day.',
    solution:'Humaniq plans to help сreate gender equality by connecting the female population to 4.0 banking services.  Anyone — young, old, male or female — can receive loans or donations in Humaniq This will improve healthcare, income, and education. It will also remove the barriers to women registering bank account. Women will have more control over their finances and business. For oppressed women and for others without any access to banks, the barriers to financial account registration will disappear. People will gain control over their funds and their businesses.'
  },
  {
    title: 'Boosting the Chinese economy',
    img: '/img/mock/holder_400x280.png',
    introduction: 'Nowadays, nearly 95% of trade volume comes from China. Africa is seen by Chinese businessmen as 900 million potential customers in a fast-growing market. Perhaps more importantly, African societies are far from market saturation, unlike their Western counterparts. Thus, in Africa, China finds not only an ample supply of potential new customers but far less competition from other nations. The Humaniq project is really good news for China.',
    solution:'Humaniq app will not be just another crypto-wallet. We will provide 4.0 banking which gives an opportunity for users to earn money by interacting within the app as well as attracting microloans. This means unbanked people will be able to improve their lives and to afford purchasing more goods for their families and themselves. And the more wealth is created in emerging economies in Africa, Asia and South America, the better for the manufacturing sector and export economy of China. By helping these millions of people to raise some money, Humaniq will therefore give an impulse for growing purchasing-power.'
  }
]

const SE_Cases = () => {

  const renderdCases = cases.map( (props, i) => <Case key={"Key_" + i} {...props}/>)

  const renderedlinks = cases.map( (caseItem, i) =>{
    const anchor = convert.toKebab(caseItem.title)
    return(
      <li key={'Key_' + i} className={cn('nav-links-item')}>
        <A_Link to={`/use-cases/#${anchor}`} type="primary">{caseItem.title}</A_Link>
      </li>
    )
  })
  return (
    <div>
      <Meta />
      <A_Container type="section-clean">
        <O_Hero img={{src: "/img/placeholder-squared.svg", alt: "Humaniq’s Global Mission"}}>
          <A_H type="hero">Humaniq’s Global Mission</A_H>
          <div className={cn('hero-sub')}>
            <A_P type="hero">The core idea behind Humaniq stands far beyond the regular banking. Humaniq’s mission is in achieving global financial inclusion for everyone and everywhere.</A_P>
          </div>
          <nav className={cn('nav-links')}>
            <A_H type='section-sub'>Use Cases</A_H>
            <ul>
              {renderedlinks}
            </ul>
          </nav>
          <nav className={cn('nav-links-mob')}>
            Use Cases
          </nav>
        </O_Hero>
      </A_Container>
      {renderdCases}
    </div>
  )
}


SE_Cases.propTypes = {};

SE_Cases.defaultProps = {}

export default SE_Cases