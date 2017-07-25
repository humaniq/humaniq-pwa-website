import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Wiki0')
import A_Container from 'A_Container'
import A_Image from 'A_Image'
import A_Link from 'A_Link'
import Info from './Info'
import A_P from 'A_P'
import O_ArticleList from 'O_ArticleList'

class SE_Wiki0 extends Component {

  render() {
    const {articles} = this.props
    return (
      <div>
        <A_Container type='section-wiki'>
          <div className={cn('hero')}>
            <div className={cn('hero-item')}>
              <A_Link type='block' to="/wiki/about-humaniq">
                <A_Image src='/img/illustrations/wiki-about-humaniq.svg' alt='About Humaniq'/>
                <div className={cn('hero-item-text')}>
                  About Humaniq
                </div>
              </A_Link>
            </div>
            <div className={cn('hero-item')}>
              <A_Link type='block' to="/wiki/technical-mecca">
                <A_Image src='/img/illustrations/wiki-technical-mecca.svg' alt='Technical Mecca '/>
                <div className={cn('hero-item-text')}>
                  Technical Mecca
                </div>
              </A_Link>
            </div>
          </div>
        </A_Container>
        <A_Container type='section-wiki'>
          <Info
            type='moving-title'
            title='Humaniq Roadmap'
            external
            link={{
              to: 'https://trello.com/b/xax1RSN8/humaniq-roadmap',
              text: 'Find out more about the plans'
            }}
            img={{
              src: '/img/illustrations/wiki-roadmap.svg',
              alt: 'Humaniq Roadmap'
            }}
          ><A_P type='third'>Humaniq global initiative plan involves a lot of research, investigations and partnerships,
            but it is also important to be aligned with the development. Since Humaniq is about the community, we want
            to be as transparant as possible. That is why our technical roadmap is available to general public.</A_P>
          </Info>
        </A_Container>
        <O_ArticleList articles={articles} title="Featured Articles"/>
      </div>
    )
  }
}

SE_Wiki0.propTypes = {
  articles: T.array.isRequired
};

SE_Wiki0.defaultProps = {}

export default SE_Wiki0
