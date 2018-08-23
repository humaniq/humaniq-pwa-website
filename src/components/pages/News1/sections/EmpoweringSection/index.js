import React from 'react'
import A_Title from 'A_Title_H'
import O_SimpleForm_H from '../../../../widgets/O_SimpleForm_H_3';
import M_Exchanges_Slider from "../../../../widgets/M_Exchanges_Slider";
import Slider from "react-slick";
//import M_Countdown from "../../../../widgets/M_Countdown";
import axios from "axios/index";
import Delay from "react-delay";

import {mainList} from "/data/news";

import './styles.scss'
import {cssClassName} from 'utils'


const cn = cssClassName('SE_News1_Empowering')

const handleLinkClick = (name) => {
  if (window.ga) window.ga('send', 'event', 'other', 'event-click-' + name);
};

const formatUserNum = (users) => {
  let usersD = users.toString();
  usersD = usersD.slice(0, usersD.length - 3) + "  " + usersD.slice(usersD.length - 3);
  return usersD
}

function createMarkup(input) {
  return {__html: input};
}

const _createLinks = (links) => (
    links.map(({title, more, img, button, url, uid }, index) => {
      var divStyle = {
        backgroundImage: 'url(' + img + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      };
      return (
                <div className='item' key={`mainEvent-${index + 1}`}>
                    <div className={'wrap'}  style={divStyle} >
                        <h1 dangerouslySetInnerHTML={createMarkup(title)}/>
                        <div className='more'  dangerouslySetInnerHTML={createMarkup(more)}/>
                        { button &&
                            <div>
                                <a href={url} className='button' onClick={() => {handleLinkClick(uid)}} target='_blank'>{button}</a>
                            </div>
                        }
                    </div>
                </div>)

    }
    )
);


class SE_Home_Empowering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hmq2usd: "",
      ccwShow: false
    };
  }

  gotoSlide = (index) => {
    this.slider.slickGoTo(index);
    console.log(this.slider);
  }

  createDots = (list) => {
    return list.map(({title, more, img}, index) => {
      return (
                <i>
                    {this.state.activeSlide == index &&
                        <div className="pie-wrap">
                            <div className="slice1 slice-wrap"></div>
                            <div className="slice2 slice-wrap"></div>
                        </div>
                    }
                    {this.state.activeSlide != index &&
                        <div className="pie-wrap full"  onClick={ ()=> {this.gotoSlide(index)} }>
                        </div>
                    }
                </i>
      )
    })
  }


  componentDidMount() {
    axios.get("https://api.coinmarketcap.com/v2/ticker/1669/")
            .then(res => {
              console.log(res.data);
              let ratio = Math.round(1000 * res.data.data.quotes.USD.price) / 1000;
              console.log(ratio);
              this.setState({
                hmq2usd: "1 HMQ = " + ratio + " USD",
                ccwShow: res.data.data.quotes.USD.percent_change_24h > 0,
                ccw: res.data.data.quotes.USD.percent_change_24h
              });
            })
            .catch(function (error) {
              console.log(error);
            });
  }


  render() {
    var settings = {
      loop: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 5350,
      cssEase: 'ease-in-out',
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      initialSlide: 0,
      arrows: false,
          //dots: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      mobileFirst: true,
      swipe: true,
      swipeToSlide: false,
      touchMove: true,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
    };



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
                        {this.state.ccwShow &&
                        <div className='ccw-wrap'>
                            <script type="text/javascript"
                                    src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
                            <div className="coinmarketcap-currency-widget" data-currencyid="1669" data-base="USD"
                                 data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true"
                                 data-volume="true" data-stats="USD" data-statsticker="false"></div>
                        </div>
                        }
                    </div>
                    <div className={cn('anni')}>
                        <div className={'anni-title'}>1 year after tokensale</div>
                        <div className={'anni-operate'}>
                            <div className={'anni-mark'}>
                                <img src="/img/done.svg"/>
                            </div>
                            <div className='anni-slide one'>21 countries <br/> operating</div>
                            <div className='anni-slide two'>{formatUserNum(413168)} <br/>users</div>
                            <div className='anni-slide three'>Hybrid <br/>blockchain</div>
                        </div>
                    </div>


                </div>


                <div className={cn('right-side')}>
                        <Slider  ref={slider => (this.slider = slider)} {...settings}>
                            {_createLinks(mainList)}
                        </Slider>

                    <div className={"overlay"}>
                        <div className={'pre'}>
                            <b>TODAY</b><br/>
                            <i>{this.state.hmq2usd}</i>
                            {this.state.ccwShow &&
                            <div className='mmark'><img src="/img/ccw-arrow.svg"/>{this.state.ccw}%</div>
                            }
                        </div>
                        <div className={"dots"}>
                            {this.createDots(mainList)}
                        </div>
                    </div>
                </div>

                <div className={cn('subscribe')}>
                    <h3>Join now to be the first to get Humaniq <br/> great news and upcoming offers!</h3>
                    <div className='frm'>
                        <O_SimpleForm_H formType='subscribe'/>
                    </div>
                </div>

                <div className={cn('slider-wrap')}>
                    <div className='pre'>
                        <A_Title type={'hero'} theme={'bright'}>HMQ token is a fuel of the platform</A_Title>
                        Visit one of the following external services independent from Humaniq in order to purchase HMQ
                    </div>
                    <div className={cn('slider')}>
                        <Delay wait={2000}>
                            <M_Exchanges_Slider/>
                        </Delay>
                    </div>
                </div>

                <div className="coinswitch-widget">
                </div>

            </section>
    )
  }
}

export default SE_Home_Empowering

SE_Home_Empowering.propTypes = {
    //mix: T.string,
}
