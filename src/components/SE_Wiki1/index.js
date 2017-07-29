import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Wiki1')
import A_Container from 'A_Container'
import A_P from 'A_P'
import A_H from 'A_H'
import O_Сrumbs from 'O_Сrumbs'
import O_ArticleList from 'O_ArticleList'
import O_Hero from 'O_Hero'


class SE_Wiki1 extends Component {

  render() {
    const {level0, articlesByLevel1, description, level0Title, img} = this.props

    const renderedCategories = articlesByLevel1.map( ({level1Category, articleUrls}) =>
      <div key={'key_' + level1Category} className={cn('article-list')}>
        <O_ArticleList  title={level1Category} articles={articleUrls}/>
      </div>
    )
    return (
      <A_Container type="section-clean">
        <O_Сrumbs
          path={[
            {name: 'Humaniq Wiki', url: `/wiki`},
            {name: level0Title, url: `/wiki/${level0}`}
          ]}
        />
        <O_Hero img={{src: img, alt: "Humaniq’s Global Mission"}}>
          <A_H type="hero">{level0Title}</A_H>
          <div className={cn('hero-sub')}>
            <A_P type="hero">{description}</A_P>
          </div>
        </O_Hero>
        {renderedCategories}
      </A_Container>
    )
  }
}

SE_Wiki1.propTypes = {
  section: T.string.isRequired,
  articlesByLevel1: T.array.isRequired,
  description: T.string.isRequired,
  level0Title: T.string.isRequired,
};

SE_Wiki1.defaultProps = {
  section: '',
  articlesByLevel1: [],
  description: '',
  level0Title: ''
}

export default SE_Wiki1
