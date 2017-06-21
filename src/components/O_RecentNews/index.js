import React from 'react';
import {Link} from 'react-router'
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_RecentNews')
import A_H from 'A_H'

const O_RecentNews = () => {
  return (
    <section className={cn()}>
      <div className="l-container">
        <div className={cn('inner')}>
          <A_H type="h2">Recent news</A_H>
          <div className="m-news-item-h">
            <div className="m-author">
              <img className="a-avatar" src="/img/placeholder.svg" width="35" height="35"/>
              <Link className="a-username" to="#">Humaniq Team</Link>
              <br/>
              <span className="a-date">Thursday, June 15, 2017</span>
            </div>
            <div className="m-news-item-h__content">
              <A_H type="h4" href="#">From Here To Where? Bitcoin And The Future Of Cryptocurrency.</A_H>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus et sapien in rutrum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">Read more</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

O_RecentNews.propTypes = {};

export default O_RecentNews