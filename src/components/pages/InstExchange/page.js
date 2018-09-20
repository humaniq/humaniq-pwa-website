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
        text: "CoinSwitch is a cryptocurrency exchange providing the best way to invest in cryptocurrencies by aggregating all the leading exchanges and comparing cryptocurrency prices in real time. CoinSwitch is our partner."
      },
      {
        title: "Can the rates change during the transaction?",
        text: "Unlike ordinary money, cryptocurrency prices are highly volatile, so the rates do fluctuate. It is even possible that an exchange rate of some altcoins observed before the transaction changes (higher or lower) once the transaction is confirmed. In this case, the total quantity of the digital currency received may differ from what you saw before proceeding with the transaction."
      },
      {
        title: "What is our transaction fees?",
        text: "CoinSwitch charges a fee of 0% to 0.75% depending on the exchange you select for your transaction. The conversion rate you see already includes the fees. <br><b>Note:</b> This fee does not include the exchange charges or the network fee.\n"
      },
      {
        title: "What is the minimum/maximum amount?",
        text: "Exchange doesnʼt imply any volume restrictions, but minimal amount for the exchanging is $30. If the funds to be exchanged are insufficient, the corresponding pop-up will appear."
      },
      {
        title: "When should I receive my money?",
        text: "Transactions normally take 15-30 minutes to be processed. If a transaction is large (1 BTC or more), processing may take more time depending on the transaction volume and blockchain capacity. You can check the currency charts to see if the network is congested."
      },
    ]
  },
  {
    title: "About Wallets",
    text: "",
    qa:[
      {
        title: "Whatʼs the cryptocurrency wallet address?",
        text: "A cryptocurrency wallet is a digital storage for your coins. Each coin has a certain wallet provider: those can be the official GUI-wallets, web wallets and other applications. The wallet address represents a randomly generated combination of digits and letters. CoinSwitch doesnʼt provide wallet addresses and never stores user deposits. To exchange cryptocurrencies, you need to have a cryptocurrency wallet address."
      },
      {
        title: "How do I get a cryptocurrency wallet address?",
        text: "Just figure out what coin you are going to buy, and seek for a stable wallet. As a rule, each coin has its official wallet client. Note that each wallet has its unique address or a tag with a private key, which is crucial to restore the wallet if/when lost. We never ask your private keys. Store them in a safe place and never show to anyone. If the private keys are stolen, your cryptocurrency wallet with all the coins is lost forever."
      },
      {
        title: "Why is my cryptocurrency wallet address recognized as invalid?",
        text: "We support most of the wallets. If your wallet address is recognized as invalid, this shall be one among the following reasons:<ul><li> You confused Dash (DASH) with Dashcoin (DSH). These are two different coins with two different tickers; <li>You confused Factom (FCT) with Fantomcoin (FCN). Different currencies as well; <li>Typo or character is missing. Make sure that the corresponding address matches the actual address of your wallet.</li></ul>"
      }
    ]
  },
  {
    title: "About Transactions",
    text: "",
    qa:[
      {
        title: "How do I cancel my transaction?",
        text: "Blockchain transactions are irreversible. Once the money is sent, it cannot be rolled back. When exchanging cryptos, always think twice and check all the payment details with proper attention prior to sending the money."
      },
      {
        title: "Why does my transaction take so long?",
        text: "As a rule, our transaction takes 15-30 minutes to be processed. If your transaction takes longer, this might be due to a wide range of factors:<ul> <li>Blockchain overloaded. There are many transactions pending, including yours. These issues take place in blockchains. All you have to do is to wait. Regretfully, we don’t influence the blockchain delays.<li>DDoS attacks. Any platform may experience one. In this case, all you have to do is wait.</li></ul>"
      },
      {
        title: "Why is my transaction still pending unconfirmed - I've already paid?",
        text: "This might take place due to these particular reasons:<ul><li>The transaction hasn't been included in the blockchain (yet). Cryptocurrencies aren't 100% stable, so minor errors might occur. We either do refund the money or push a payment through if you provide the hash (a tx ID) of the transaction;<li>ETC and ETH confusion. The addresses of Ethereum (ETH) and Ethereum Classic (ETH) are of the same structure. If you send ETC or ETH, please double-check the transaction address. For example, if you create an ETH-to-BTC transaction, make sure you’ve send ETH, not ETC. Otherwise, your transaction will be stuck.<li>Other internal errors. Even our perfect system may lag or experience internal issues. If you suppose this to be the case, please kindly report to support@coinswitch.co</li></ul>"
      },
      {
        title: "What will happen if I close the browser tab?",
        text: "If you have submitted the transfer, you can surely close the browser tab. Our system will automatically complete the transaction, and the amount will be deposited into your recipient wallet address. Just keep the the order ID for any follow-ups."
      },
      {
        title: "Why blockchain verification is taking long?",
        text: "Blockchain is peer-to-peer network, where transactions need to be confirmed. This process can take from few minutes to several hours, depending on the cryptocurrency and load of the network. <br>There is no particular way we can accelerate blockchain confirmations. Please, be patient in case of the delay. Your funds are safe, and the exchange will proceed once our partner receives the deposit."
      },
      {
        title: "Funds were accidentally sent to the wrong address. Can I recover my funds?",
        text: "Unfortunately, no. Once your funds are sent to the wrong address, there is nothing we can do to redeem. This is why it is extremely important to double-check the address you enter while ordering."
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
