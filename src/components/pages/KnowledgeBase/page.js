import React, {Component} from 'react'
import A_Container from 'A_Container'
import Menu from './Menu'
import Article from './Article'
import Section from "./Article/Section";
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

        <div className={cn('articles')}>
          {kbArticles.map((articleData, index) => (
            <Article
              key={`article-${index}`}
              mix={cn('article')}
              articleData={articleData}
            >
              <div className={cn('sections')}>
                {articleData.sections.map((sectionData, index) => {
                  const sectionId = `${articleData.id}-section-${index + 1}`
                  return (
                    <Section
                      key={sectionId}
                      mix={cn('section')}
                      sectionId={sectionId}
                      sectionData={sectionData}
                    />
                  )
                })}
              </div>
            </Article>
          ))}
        </div>

      </A_Container>
    )
  }
}


export default KnowledgeBase;
