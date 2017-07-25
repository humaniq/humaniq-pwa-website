import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Wiki2')
import A_Container from 'A_Container'

import A_P from 'A_P'
import A_H from 'A_H'
import O_Сrumbs from 'O_Сrumbs'


class SE_Wiki2 extends Component {

  render() {
    const {loaded, article, level0Title, description} = this.props
    if(!loaded || !article){
      return null;
    }

    return (
      <div>
        <A_Container type="section-clean">
          <O_Сrumbs
            path={[
              {name: 'Humaniq Wiki', url: `/wiki`},
              {name: level0Title, url: `/wiki/${article.level0}`},
              {name: article.title, url: `/wiki/${article.level0}/${article.id}`}
            ]}
          />
          <A_H type='hero'>{article.level1}</A_H>
          <A_P type='hero'>{description}</A_P>
        </A_Container>
        <A_Container type="section-clean">
          <A_H type='section'>{article.title}</A_H>
          <div className={cn('article')} dangerouslySetInnerHTML={{ __html: article.article}} />
        </A_Container>
      </div>
    )
  }
}

SE_Wiki2.propTypes = {
  loaded: T.bool.isRequired,
  article:  T.shape({
    title: T.string.isRequired,
    article: T.string.isRequired
  }),
  level0Title: T.string,
};

SE_Wiki2.defaultProps = {
  level0Title: '',
}

export default SE_Wiki2
