import React, {Component} from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Wiki1')
import A_Container from 'A_Container'
// import A_Image from 'A_Image'
// import A_Link from 'A_Link'
// import Info from './Info'
import A_P from 'A_P'
import A_H from 'A_H'
import O_Сrumbs from 'O_Сrumbs'
import O_ArticleList from 'O_ArticleList'
import O_Hero from 'O_Hero'
import {convert} from 'utils'


class SE_Wiki2 extends Component {

  render() {
    const {loaded, loading, article, section, sectionName} = this.props
    if(!loaded){
      return null;
    }
    return (
      <div>
        <O_Сrumbs
          path={[
            {name: 'Humaniq Wiki', url: `/wiki`},
            {name: sectionName, url: `/wiki/${section}`},
            {name: article.title, url: `/wiki/${section}/${convert.toKebab(article.title)}`}
          ]}
        />
        <A_Container type="section-clean">
          <A_H type='hero'>Getting Started</A_H>
          <A_P type='hero'>Humaniq is proud of its wide partnership network which includes everybody from fintech companies and Blockchain communities to publishing media and app developers.</A_P>
        </A_Container>
        <A_Container type="section-clean">
          <A_H type='section'>{article.title}</A_H>
          <div dangerouslySetInnerHTML={{ __html: article.article}} />
        </A_Container>
      </div>
    )
  }
}

SE_Wiki2.propTypes = {};

SE_Wiki2.defaultProps = {}

export default SE_Wiki2
