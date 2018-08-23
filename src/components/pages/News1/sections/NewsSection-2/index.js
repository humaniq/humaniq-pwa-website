import React from 'react'
import * as T from 'prop-types'
import A_Title from 'A_Title_H'
import Slider from "react-slick";

import './styles.scss'
import {cssClassName} from 'utils'

import {articleList} from "/data/news";

//import Butter from 'buttercms';
//const butter = Butter('63c5be1dcac33aad42357d8eb320058d0562c240');

const cn = cssClassName('SE_News1_News');

const handleLinkClick = (name) => {
  if (window.ga) window.ga('send', 'event', 'other', 'news-click-' + name);
};

const _createLinks = (links, startIndex) => (
    links.map(({title, src, url, date, img}, index) => {

      if (index>=startIndex) {
        return (
                <div className='item' key={`newsLink-${index + 1}`}>
                    {url &&
                    <a className={'link'} href={url} title={title} target="_blank"
                       onClick={() => {
                         handleLinkClick(index)
                       }}>
                        <img src={img}/>
                        <div className='src'>{src}</div>
                        {title}
                    </a>
                    }
                    {!url &&
                    <div className={'link'} title={title}>
                        <img src={img}/>
                        <div className='src'>{src}</div>
                        {title}
                    </div>
                    }
                    <div className='src'>{date}</div>
                </div>)
      }
    }
  )
);


function nextArrow(props) {
  const { className, onClick } = props;
  return (
      <div className={className} onClick={onClick}/>
  );
}

function prevArrow(props) {
  const { className, onClick } = props;
  return (
      <div className={className} onClick={onClick}/>
  );
}


class SE_News1_News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }




  render() {

    var settings = {
      loop: true,


      speed: 700,
      autoplay: false,
      cssEase: 'ease-in-out',
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      initialSlide: 0,
      arrows: true,
      //buttons: false,
      //dots: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      mobileFirst: true,
      swipe: true,
      swipeToSlide: false,
      touchMove: true,
      nextArrow: <nextArrow />,
      prevArrow: <prevArrow />,


      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };




    return (
            <section className={cn([this.mix])}>
                <A_Title type="hero" mix={cn('text-title')} theme="dark">
                    Latest <ss>news</ss>
                </A_Title>


                <div className={cn('article-list')}>
                    <Slider {...settings}>
                        {_createLinks(articleList, 0)}
                    </Slider>
                </div>



                <div className={cn('more-news')}>
                    <a className='button' href='https://blog.humaniq.co/' target='_blank'>See All NEWS</a>
                    <a className='link-sec' href="https://www.facebook.com/humaniq.co/" target='_blank'>
                        Join our Facebook
                        <img src="/img/link.svg"/>
                    </a>
                </div>
            </section>
    )
  }
}

export default SE_News1_News

SE_News1_News.propTypes = {
  mix: T.string, //BEM mixin from parent block
};
