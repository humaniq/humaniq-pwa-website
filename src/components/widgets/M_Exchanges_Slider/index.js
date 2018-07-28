import React from 'react';
import Slider from "react-slick";
import * as T from "prop-types";

import './styles.scss';
import {cssClassName} from 'utils'

const cn = cssClassName('Exchanges_Slider')

const handleLinkClick = (name) => {
  if (window.ga) window.ga('send', 'event', 'other', 'exchanges-slider-' + name);
}


const _createLinks = (links) => (
    links.map(({name, url, img, mark, cls}, index) => {
      return (
          <div key={`exchanges-slider-item-${index + 1}`}>
            { url
                ?
                <a className={cn('slide')} href={url} title={name} target="_blank" onClick={() => { handleLinkClick(name) }}>
                    <img src={img}/>
                    { mark ? <div className={'mark '+cls }>{mark}</div> : null }
                </a>
                :
                <div className={cn('slide')} title={name} onClick={() => { handleLinkClick(name) }}>
                    <img src={img}/>
                  { mark ? <div className={'mark '+cls }>{mark}</div> : null }
                  </div>
                  }
          </div>
      )
    })
)

class M_Exchanges_Slider extends React.Component {
  render() {
    var settings = {
      loop: true,
      slide: "a",


      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false,
      dots: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      mobileFirst: true,
      swipe: false,
      swipeToSlide: false,
      touchMove: false,



      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    };
    return (
            <Slider {...settings}>
                {_createLinks(socialLinks)}
            </Slider>)
  }
}

export default M_Exchanges_Slider

M_Exchanges_Slider.propTypes = {};

const socialLinks = [
  {
    name: 'bittrex',
    url: 'https://bittrex.com/Market/Index?MarketName=BTC-HMQ',
    img: "/img/exchanges/bittrex.png",
    mark: "Top volume",
    cls: "blue"
  },
  {
    name: 'etherdelta',
    url: 'https://etherdelta.com/#HMQ-ETH',
    img: "/img/exchanges/etherdelta.png"
  },
  {
    name: 'idex',
    url: 'https://idex.market/eth/hmq',
    img: "/img/exchanges/idex.png"
  },
  {
    name: 'mercatox',
    url: 'https://mercatox.com/exchange/HMQ/BTC',
    img: "/img/exchanges/mercatox.png"
  },
  {
    name: 'upbit',
    url: 'https://upbit.com/exchange?code=CRIX.UPBIT.BTC-HMQ',
    img: "/img/exchanges/upbit.png"
  },
  {
    name: 'yobit',
    url: 'https://yobit.net/ru/trade/HMQ/BTC',
    img: "/img/exchanges/yobit.png"
  },
  {
    name: 'new_exchange',
    url: '',
    img: "/img/exchanges/new_exchange.png",
    mark: "Soon, stay tuned",
    cls: "pink"
  }
]

