import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_RecentNews')
import A_H from 'A_H'
import A_Container from 'A_Container'

const O_RecentNews = () => {
  return (
    <section className={cn()}>
      <A_Container>
        <div className={cn('inner')}>
          <A_H type="h2">Recent news</A_H>
          <a href="#" className="m-news-item-h">
            <div className="m-author">
              <img className="a-avatar" src="/img/placeholder.svg" width="35" height="35"/>
              <span className="a-username" to="#">Humaniq Team</span>
              <br/>
              <span className="a-date">Thursday, June 15, 2017</span>
            </div>
            <div className="m-news-item-h__content">
              <A_H type="h4">From Here To Where? Bitcoin And The Future Of Cryptocurrency.</A_H>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus et sapien in rutrum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className="a-readmore">Read more</span></p>
            </div>
          </a>
        </div>
      </A_Container>
    </section>
  )
}

O_RecentNews.propTypes = {};

export default O_RecentNews