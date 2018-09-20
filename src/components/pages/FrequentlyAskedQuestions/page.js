import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
const cn = cssClassName('FrequentlyAskedQuestions');
import A_H from 'A_H';
import A_P from 'A_P';
import A_Link from 'A_Link';
import O_Hero from 'O_Hero'
class FrequentlyAskedQuestions extends Component {

  render() {
    return (
      <div className={cn('section-wrapper')}>
        <A_Container type='equal'>
          <O_Hero>
            <A_H type='hero'>Frequently Asked Questions</A_H>
            <A_P type="hero">Humaniq is a simple and secure mobile app, delivering financial inclusion solutions globally.</A_P>
          </O_Hero>
          <div className={cn('faq')}>

            <section className={cn('firstquestion')}>
              <h2>1. What is the Humaniq token?</h2>
              <p className='d'>The HMQ token is a currency used inside the Humaniq app which is traded on cryptocurrency exchanges, giving it a certain value in US dollars (which is displayed in real time on the app).</p>
              <p className='d'>HMQ is the world's first hybrid crypto currency in your Humaniq app wallet. As long as you get your HMQ you can use it immediately to exchange it with other people or buy some goods. You can use it within Humaniq app or on stock exchange. You can receive your fees in HMQ and use it as usual money the way you use cash or credit cards, but in a much-much safer way. HMQ is your digital wallet and your digital deposit box.</p>
              <p className='d'>The HMQ currency has several advantages over traditional cash:</p>
              <ul>
                <li>It has zero fees for any transfer</li>
                <li>It's international money, sending it into another country is the same as sending it to your friend</li>
                <li>You can receive tokens for free by doing simple actions</li>
              </ul>
            </section>

            <section className={cn('question')}>
              <h2>2. How can I use this app?</h2>
              <p className='d'>In Humaniq app you can:</p>
              <ul>
                <li>Invite your friends and text with them</li>
                <li>Create and use a wallet</li>
                <li>Get HMQ BONUS</li>
                <li>Participate in surveys and earn HMQ Tokens</li>
              </ul>
            </section>

            <section className={cn('question')}>
              <h2>3. How can I get FREE BONUS HMQ tokens for:</h2>
              <ol>
                <li>Initial registration - you get HMQ bonus for the initial registration right after the application downloading and Validation by Flash Call in order to complete the registration procedure</li>
                <li>BIO identification – you get a HMQ bonus after passing Bio identification: photo + graphic key</li>
                <li>Inviting friends - you get a HMQ bonus for inviting friends after they have registered your promocode.</li>
                <li>Being invited by a friend – you can use the promocode of your friend that has invited you right after downloading the application and adding it at &laquo;more&raquo; tab on your profile.</li>
                <li>Having a first outgoing transaction of the week to a friend from the application contact list.</li>
                <li>Having a first incoming transaction of the week from a friend from application contact list.</li>
              </ol>
              <p className='d'>But remember that after reaching $20 USD in total BONUS you will not be granted any more tokens. $20 USD is the maximum that you can get. You can still do all the actions mentioned above, but you won’t get the bonus for it.</p>
            </section>

            <section className={cn('question')}>
              <h2>4. In how many countries does Humaniq application work?</h2>
              <p className='d'>At the moment our app with full functionality is available in 46 countries: Tanzania, Uganda, Rwanda, Ghana, Botswana, Zimbabwe, Côte d’Ivoire, South Africa, Kenia, Senegal, Zambia, Cameroon, Burkina Faso, Guinea, Democratic Republic of Congo, Sierra Leone, Burundi, Congo, Sudan, Liberia, Equatorial Guinea, Republic of Malawi, Republic of Iceland, Bosnia and Herzegovina, Republic of Serbia, Macedonia, Republic of the Philippines, Myanmar, Sri Lanka, Papua New Guinea, Mongolia, Seychelles, Belize, Dominican Republic, The Bahamas, Guatemala, Honduras, Costa Rica, Venezuela, Guyana, Suriname, Paragway, Oriental Republic of Uruguay, Mexico, Albania, Montenegro.</p>
              <p className='d'>More countries are coming!</p>
            </section>

            <section className={cn('question')}>
              <h2>5. How to invite my friends?</h2>
              <p className='d'>To invite your friends and relatives, first click on MORE Tab, then use the Share button to send invites on social media, like WhatsApp, on Email, and in the Contacts. This is how simple it is.</p>
            </section>

            <section className={cn('question')}>
              <h2>6. How to get my transaction hash?</h2>
              <p className='d'>In order to get your transaction hash for your HMQ transfer, please follow these steps:</p>
              <ol>
                <li>Copy destination address</li>
                <li>Go to <a href='http://etherscan.io/' target='_blank'>http://etherscan.io/</a></li>
                <li>Paste destination address in the search box and click GO</li>
                <li>Open tab &laquo;ERC20 Token Txns&raquo;</li>
                <li>According to the Value of transfer you can find your transfer and click on &laquo;TxHash&raquo; link</li>
                <li>That's it!</li>
              </ol>
            </section>

            <section className={cn('question')}>
              <h2>7. How can I find my PROMO CODE?</h2>
              <p className='d'>You can find your promocode on CHATS Tab by pressing the button &quot;Invite a friend&quot;, this is your personal invitation promo code Send it to your friends and get BONUS for it! You will get HMQ BONUS for each friend you invite after they register your promo code on More Tab by pressing the avatar and clicking &quot;Enter your Promo code&quot;.</p>
              <p className='d'>But remember that after reaching $20 USD in total BONUS you will not be granted any more tokens. $20 USD is the maximum that you can get. You can still invite friends, but you won’t get the bonus for it.</p>
            </section>

            <section className={cn('question')}>
              <h2>8. How to delete my profile?</h2>
              <p className='d'>Please contact Support agent and inform that you want to delete your account. All your data will be deleted from our data base.</p>
            </section>

            <section className={cn('question')}>
              <h2>9. I have a problem with Humaniq App using</h2>
              <p className='d'>Please contact Live Support Chat and describe your problem in detais, our agents will help you immediately. Please go to the Chat section / Bots / Humaniq Support</p>
            </section>
          </div>
        </A_Container>
      </div>
    )
  }
}


export default FrequentlyAskedQuestions;
