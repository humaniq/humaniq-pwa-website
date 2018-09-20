import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'

const cn = cssClassName('InstExchange');
import A_H from 'A_H';
import O_Hero from 'O_Hero'

const handleLinkClick = (name) => {
  if (window.ga) window.ga('send', 'event', 'other', 'news-click-' + name);
};

function createMarkup(input) {
  return {__html: input};
}


const qaList = [
  {
    title: "About exchange",
    text: "",
    qa:[
      {
        title: "What is CoinSwitch?",
        text: "CoinSwitch is a cryptocurrency exchange providing the best way to invest in cryptocurrencies by aggregating all leading exchanges and comparing cryptocurrency prices in real time. It us our partner."
      },
      {
        title: "Can the rates change during the transaction?",
        text: "Unlike ordinary money, cryptocurrency prices are highly volatile, so the rate may fluctuate. It may happen that the altcoin exchange rate which you see before the transaction is different (high or low) after transaction gets completed. In that case, the exchanged digital currency quantity which you receive may differ from what you see during the comparison."
      },
      {
        title: "What is our transaction fees?",
        text: "Charges a fee of <b>0% to 0.75%</b> depending on the exchange you select for your transaction. The conversion rate you see is inclusive of the fees. <br><b>Note:</b> This fees does not include any amount charged by the exchange itself and the network fee."
      },
      {
        title: "What is the minimum/maximum amount?",
        text: "Exchange doesnʼt have amount restrictions, but minimal amount of exchanging is 30$. If your funds to be exchanged are insufficient, you will see a message."
      },
      {
        title: "When should I receive my money?",
        text: "Transactions take 15-30 minutes to be processed. If a transaction is large (around 1 BTC worth), processing may take longer depending on the size of your transaction and blockchain capacity. You can check the cyrcurrency charts to check the network congession."
      },
    ]
  },
  {
    title: "About Wallets",
    text: "",
    qa:[
      {
        title: "Whatʼs the cryptocurrency wallet address?",
        text: "A cryptocurrency wallet is a digital place for your coins to be stored. Each coin has a certain wallet provider. That could be official GUI-wallets, web wallets and other applications. The wallet address represents a randomly generated combination of digits and letters. CoinSwitch doesnʼt provide wallet addresses and never stores user deposits. To exchange cryptocurrencies, you need to have a cryptocurrency wallet address."
      },
      {
        title: "How do I get a cryptocurrency wallet address?",
        text: "Just figure out, what coin do you want to buy and seek for a stable wallet version. As a rule, each coin has its official wallet client. Note that each wallet has its unique address or a tag with a private key that is required to restore your wallet if lost. We never ask your private keys. Store them in a safe place and never show anyone. Once private keys are stolen, your cryptocurrency wallet with all the coins will be lost forever."
      },
      {
        title: "Why is my cryptocurrency wallet address recognized as invalid?",
        text: "We support most of the wallets. If your wallet address is recognized as invalid, there is always a reason: You confused Dash (DASH) with Dashcoin DSH). These are two different coins with two different amounts. You confused Factom (FCT) with Fantomcoin (FCN). Different currencies as well. Typo or character missing. Make sure that the address you specify matches the actual address of your wallet."
      }
    ]
  },
  {
    title: "About Transactions",
    text: "",
    qa:[
      {
        title: "How do I cancel my transaction?",
        text: "Blockchain transactions are irreversible. Once the money is sent, it cannot be rolled back. So if you are going to exchange cryptos, think twice and check attentively all the payment details prior to sending money."
      },
      {
        title: "Why does my transaction take so long?",
        text: "As a rule, our transaction takes 15-30 minutes to be processed. If your transaction takes longer, this might be due to a wide range of factors.<ul> <li>Blockchain overloaded. There are many transactions pending including yours. These issues take place on blockchains. All you have to do is to wait. We doesn't control blockchain delays. <li>DDoS attacks. Any platform may experience such issues. In this case, all you have to do is wait.</li></ul>"
      },
      {
        title: "Why is my transaction still waiting for payment if I've already paid?",
        text: "This might be due to several reasons.<ul> <li>The transaction hasn't been included to a blockchain. Cryptocurrencies aren't stable, so minor errors might occur. Either can we refund money or push a payment through if you provide the hash (a tx ID) of your transaction. <li>ETC and ETH confusion. The addresses of Ethereum (ETH) and Ethereum Classic (ETH) are of the same structure. If you send ETC or ETH, make sure that you've created an appropriate transaction. For example, if you create an ETH to BTC transaction, make sure that you send ETH, not ETC. Otherwise, your transaction will be stuck. <li>Other internal errors. Even our perfect system may lag or experience internal issues. If you suppose that this is the case, report it to support@coinswitch.co</li></ul>"
      },
      {
        title: "What will happen if I close the browser tab?",
        text: "If you have transferred the amount, then you can surely close the browser tab. Our system will automatically complete the transaction, and the amount will be deposited into your recipient wallet address. Just keep the the order-id with you for any follow ups."
      },
      {
        title: "Why blockchain verification is taking long?",
        text: "Blockchain is peer to peer network where transactions need to be confirmed by the network. This process can take from few minutes to several hours depending on the cryptocurrency and load on the network. We don't play any role in blockchain confirmations. Please be patient in case of delay. Your fund is safe and the exchange will proceed once our partner receives the deposits."
      },
      {
        title: "Sent funds to the wrong address. Can I recover my funds?",
        text: "Unfortunately not. Once funds are sent to a wrong address, there is nothing we can do to recover them. This is why it is extremely important to double check the address you enter while ordering."
      },
    ]
  }

]

class InstExchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCat: 0,
      activeQA: 0,
      isMobile: false
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
  componentWillUnmount() {
    window.addEventListener("resize", null);
  }

  handleResize = (WindowSize, event) => {
    this.setState({
      WindowSize: window.innerWidth,
      isMobile: (window.innerWidth<700)
    });
  }

  renderQA = (list) => (
        list.map(({title, text}, index) => {
          const isActive = (index===this.state.activeQA)? 'active':'';
          return (
                    <div className={`qa-item ${isActive}`} key={`qa-${index + 1}`}>
                        <div className='link' onClick={() => { this.setState({ activeQA: (isActive)? -1: index }) }}>
                            <div className='title'>{title}</div>
                        </div>
                        <div className='text' dangerouslySetInnerHTML={createMarkup(text)}/>
                    </div>)
        }
        )
    );

  renderCategories = (list) => (
        list.map(({title, text, qa}, index) => {
          const isActive = (index===this.state.activeCat)? 'active':'';

          return (
                    <div className={`categorie ${isActive}`} key={`cat-${index + 1}`}>
                        <div className='i'>
                            <img src='/img/information.svg'/>
                        </div>
                        <div className='link' onClick={() => { this.setState({ activeCat: index, activeQA: 0 }) }}>
                            <div className='title'>{title}</div>
                            <div className='text'>{text}</div>
                        </div>
                        <div className='qa-list'>
                            {this.state.isMobile && this.state.activeCat===index &&
                            this.renderQA(qa)
                            }
                        </div>
                    </div>)
        }
        )
    );



  render() {

    return (
            <div className={cn('section-wrapper')}>
                <A_Container type='equal'>
                    <O_Hero>
                        <A_H type='hero'>Instant exhange</A_H>
                    </O_Hero>
                    <div className={cn('contactus')}>

                        <div className="coinswitch-widget">
                            <iframe width="100%" height="400"
                                    src="https://coinswitch.co/widget?widget_id=fc72a10e&from=btc&to=hmq&amount=0.01"
                                    frameBorder={0} order="0" scrolling="no">Can't load widget
                            </iframe>
                        </div>

                        <O_Hero>
                            <A_H type='hero'>Question company</A_H>
                        </O_Hero>

                        <section className={`qa-wrapper ${(this.state.isMobile)?'is-mobile':''}`} >
                            <div className='sections'>
                                { this.renderCategories(qaList)}
                            </div>
                            <div className='qa'>
                                <div className='head'>
                                    <div className='i'>
                                        <img src='/img/information.svg'/>
                                    </div>
                                    <div className='w'>
                                        <div className='title'>
                                            { qaList[this.state.activeCat].title }
                                        </div>
                                        <div className='subtitle'>
                                            { qaList[this.state.activeCat].text }
                                        </div>
                                    </div>
                                </div>
                                <div className='qa-list'>
                                {!this.state.isMobile &&
                                this.renderQA(qaList[this.state.activeCat].qa)
                                }
                                </div>
                            </div>
                        </section>

                    </div>
                </A_Container>
            </div>
    )
  }
}


export default InstExchange;
