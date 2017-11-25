import React, {Component} from 'react'
import A_Container from 'A_Container'
import Menu from './Menu'
import Articles from './Articles'
import './styles.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('KnowledgeBase');

class KnowledgeBase extends Component {

  render() {
    const {kbArticles} = this.props
    return (
      <A_Container mix={cn()}>
        <Menu
          mix={cn('menu')}
          articles={kbArticles}
        />
        <Articles
          mix={cn('articles')}
          articles={kbArticles}
        />
      </A_Container>
    )
  }
}


export default KnowledgeBase;
