import React from 'react'
import * as T from 'prop-types'
import A_Title from 'A_Title_H'
import Slider from "react-slick";

import './styles.scss'
import {cssClassName} from 'utils'

import articleList from "../../../../../../data/news"

const cn = cssClassName('SE_News1_News');

const handleLinkClick = (name) => {
  if (window.ga) window.ga('send', 'event', 'other', 'news-click-' + name);
};


const _createLinks = (links) => (
    links.map(({title, src, url, date}, index) => {

      if (index) {
        return (
                <div className='item' key={`newsLink-${index + 1}`}>
                    <a className={'link'} href={url} title={title} target="_blank"
                       onClick={() => {
                         handleLinkClick(index)
                       }}>
                        {title}
                    </a>
                    <div className='src'>{date} &nbsp;•&nbsp; {src}</div>
                </div>)

      }
    }
)
);



function nextArrow(props) {
  const { className, onClick } = props;
  return (
        <div className={className} onClick={onClick} />
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
      latestactive: false,
    }
  }



  onMouseOverHandler = () => {
    this.setState({latestactive: true})
  }

  onMouseOutHandler = () => {
    this.setState({latestactive: false})
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
      //arrows: true,
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
                    Latest news
                </A_Title>

                <div className={cn('last-one')}>
                    <div className='img'>
                        <img src={articleList[0].img}/>
                    </div>
                    <div className='text'>
                        <div className='title' onMouseOut={this.onMouseOutHandler.bind(this)}
                             onMouseOver={this.onMouseOverHandler.bind(this)}>
                            <a href={articleList[0].url} className={this.state.latestactive ? 'active' : ''}
                               target='_blank'>{articleList[0].title}
                                <div className='src'>{articleList[0].date} &nbsp;•&nbsp; {articleList[0].src}</div>
                            </a>
                        </div>
                        <div className='buttons'>
                            <a className={this.state.latestactive ? 'button read-more active' : 'button read-more'}
                               href={articleList[0].url} onMouseOut={this.onMouseOutHandler.bind(this)}
                               onMouseOver={this.onMouseOverHandler.bind(this)} target='_blank'>Read more</a>
                            <a className='link-sec' href="https://www.facebook.com/humaniq.co/" target='_blank'>
                                Join our Facebook
                                <img src="/img/link.svg"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cn('article-list')}>
                    <Slider {...settings}>
                        {_createLinks(articleList)}
                    </Slider>
                </div>



                <div className={cn('more-news')}>
                    <a className='button' href='https://blog.humaniq.co/' target='_blank'>See All NEWS</a>
                </div>
            </section>
    )
  }
}

export default SE_News1_News

SE_News1_News.propTypes = {
  mix: T.string, //BEM mixin from parent block
};
