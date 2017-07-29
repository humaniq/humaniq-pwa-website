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


class SE_Wiki1 extends Component {

  render() {
    const {loaded, loading, articles, articleTitles, section, categories} = this.props
    // const {articleTitles} = this.props
    let title, text;
    switch(section){
      case 'technical-mecca':
        title = 'Technical Mecca'
        text = 'Technical Mecca. Humaniq is proud of its wide partnership network which includes everybody from fintech companies and Blockchain communities to publishing media and app developers.'
        break;
      case 'about-humaniq':
        title = 'About Humaniq'
        text = 'Humaniq is proud of its wide partnership network which includes everybody from fintech companies and Blockchain communities to publishing media and app developers.'
        break;
    }
    const renderedCategories = categories.map( category =>
      <div key={'key_' + category.name} className={cn('article-list')}>
        <O_ArticleList  title={category.name} articles={category.articles}/>
      </div>
    )
    return (
      <div>
        <O_Сrumbs
          path={[
            {name: 'Humaniq Wiki', url: `/wiki`},
            {name: title, url: `/wiki/${section}`}
          ]}
        />
        <A_Container type="section-clean">
          <O_Hero img={{src: "/img/placeholder-squared.svg", alt: "Humaniq’s Global Mission"}}>
            <A_H type="hero">{title}</A_H>
            <div className={cn('hero-sub')}>
              <A_P type="hero">{text}</A_P>
            </div>
          </O_Hero>
          {renderedCategories}
        </A_Container>
      </div>
    )
  }
}

SE_Wiki1.propTypes = {};

SE_Wiki1.defaultProps = {}

export default SE_Wiki1
