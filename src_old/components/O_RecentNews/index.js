import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_RecentNews')
import A_H from 'A_H'
import A_Container from 'A_Container'
import A_Link from 'A_Link'

const O_RecentNews = () => {
  return (
    <section className={cn()}>
      <A_Container>
        <div className={cn('inner')}>
          <A_H type="h2">Recent news</A_H>
          <div className="m-news-item-h">
            <div className="m-author">
              <img className="a-avatar" src="/img/placeholder.svg" width="35" height="35"/>
              <span className="a-username" to="#">The Merkle</span>
              <br/>
              <span className="a-date">April 18, 2017</span>
            </div>
            <div className="m-news-item-h__content">
              <A_H type="h4">Humaniq Appoints CEO and Global Advisory Board Members, ICO Raises Over 3,775 BTC</A_H>
              <p>
                Ever since the Humaniq project launched, cryptocurrency enthusiasts have been keeping a close eye on the project's progress.{' '}
                <A_Link to="themerkle.com/humaniq-appoints-ceo-and-global-advisory-board-members-ico-raises-over-3775-btc/" external>
                  <span className="a-readmore">Read more</span>
                </A_Link>
              </p>
            </div>
          </div>
        </div>
      </A_Container>
    </section>
  )
}

O_RecentNews.propTypes = {};

export default O_RecentNews