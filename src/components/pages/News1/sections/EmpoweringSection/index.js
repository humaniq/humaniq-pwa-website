import React from 'react'
import A_Title from 'A_Title_H'
import O_SimpleForm_H from '../../../../widgets/O_SimpleForm_H_3';
import M_Exchanges_Slider from "../../../../widgets/M_Exchanges_Slider";
import axios from "axios/index";
import Delay from "react-delay";

import './styles.scss'
import {cssClassName} from 'utils'


const cn = cssClassName('SE_News1_Empowering')

const formatUserNum = (users) => {
  let usersD = users.toString();
  usersD = usersD.slice(0,usersD.length-3) + "  " + usersD.slice(usersD.length-3);
  return usersD
}

class SE_Home_Empowering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hmq2usd: "",
      ccwHidden: " hidden"
    };
  }

  componentDidMount() {
    axios.get("https://api.coinmarketcap.com/v2/ticker/1669/")
            .then(res => {
              console.log(res.data);
              let ratio = Math.ceil(100*res.data.data.quotes.USD.price)/100;
              console.log(ratio);
              this.setState({hmq2usd: "1 HMQ = " + ratio + " USD", ccwHidden: res.data.data.quotes.USD.percent_change_24h>0 ? "" : " hidden" });
            })
            .catch(function (error) {
              console.log(error);
            });
  }


  render() {
    return (
            <section className={cn([this.mix])}>
                <div className={cn('left-side')}>
                    <div className={cn('map')}>
                        <img
                            className={cn('map-img', {type: 'desktop'})}
                            src="/img/v1/home/map-bg-2.png"
                            alt="EMPOWERING THE UNBANKED"
                        />
                        <img
                            className={cn('map-img', {type: 'mobile'})}
                            src="/img/v1/home/mobile-map.jpg"
                            alt="EMPOWERING THE UNBANKED"
                        />
                        <div className={cn('point', {number: 1})}>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <div className={cn('point', {number: 2})}>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <div className={cn('point', {number: 3})}>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <div className={cn('point', {number: 4})}>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <div className={cn('point', {number: 5})}>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    </div>
                    <div className={cn('text')}>
                        <A_Title type="hero" mix={cn('text-title')} theme="bright">
                            P2P financial services <br/>for developing countries
                        </A_Title>
                        <p className={cn('text-subtitle')}>
                            Connecting 1.7 billion people
                        </p>
                        <div className={"ccw-wrap" + this.state.ccwHidden}>
                            <div className="coinmarketcap-currency-widget" data-currencyid="1669" data-base="USD"  data-secondary="BTC"></div>
                        </div>
                    </div>
                    <div className={cn('anni')}>
                        <div className={'anni-title'}>1 year after tokensale</div>
                        <div className={'anni-operate'}>
                            <div className={'anni-mark'}>
                                <img src="/img/done.svg"/>
                            </div>
                            <div className='anni-slide one'>16 countries <br/> operating</div>
                            <div className='anni-slide two'>{formatUserNum(413168)} <br/>users</div>
                            <div className='anni-slide three'>Hybrid <br/>blockchain</div>
                        </div>
                    </div>


                </div>


                <div className={cn('right-side')}>
                    <div className={cn('text')}>
                        <A_Title type="hero" mix={cn('text-title')} theme="bright">
                            HMQ token is a fuel <br/>of the platform
                        </A_Title>
                        <p className={cn('text-subtitle')}>
                            Visit one of the following external services <br/>independent from Humaniq in order <br
                            className="d"/> to purchase HMQ
                        </p>
                    </div>
                    <div className={cn('slider-wrap')}>
                        <div className={cn('pre')}>
                            <div className={cn('left')}>Listed On</div>
                            <div className={cn('right')}>{this.state.hmq2usd}</div>
                        </div>
                        <div className={cn('slider')}>
                            <Delay wait={2000}>
                                <M_Exchanges_Slider/>
                            </Delay>
                        </div>
                        <div className={cn('post')}>
                            You may visit one of the following external services independent <br/> from Humaniq in order
                            to purchase
                            HMQ
                        </div>
                    </div>
                </div>
                <div className={cn('subscribe')}>
                    <h3>Join now to be the first to get Humaniq <br/> great news and upcoming offers!</h3>
                    <div className='frm'>
                        <O_SimpleForm_H formType='subscribe'/>
                    </div>
                </div>
            </section>
    )
  }
}

export default SE_Home_Empowering

SE_Home_Empowering.propTypes = {
  //mix: T.string,
}
