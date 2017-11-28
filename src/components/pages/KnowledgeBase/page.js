import React, {Component} from 'react'
import CustomScroll from 'react-custom-scroll'
import 'react-custom-scroll/dist/customScroll.css'
import A_Container from 'A_Container'
import Menu from './Menu'
import Article from './Article'
import Section from "./Article/Section";
import './styles.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('KnowledgeBase');

let headerOffset = 104

class KnowledgeBase extends Component {

  state = {
    scrollPosition: 0,
    scrollTo: 0,
    anchorCoords: {}
  }

  _getAnchorCoords = (anchorBlocks, offset) => {
    let anchorCoords = {}
    Object.entries(anchorBlocks).forEach((achorBlock) => {
      const [id, block] = achorBlock;
      anchorCoords = {...anchorCoords, [id]: block.getBoundingClientRect().top - offset + pageYOffset + this.state.scrollPosition}
    });
    console.log('anchorCoords', anchorCoords)
    return anchorCoords
  }

  _handleResize = () => {
    if(window.innerWidth < 1025) {
      headerOffset = 66
      this.setState({anchorCoords: this._getAnchorCoords(this.anchorBlocks, headerOffset)})
    }
  }

  _handleScroll = (e) => {
    this.setState({scrollPosition: e.target.scrollTop})
  }

  setScrollTo = (anchorBlockId) => {
    const scrollTo = this.state.anchorCoords[anchorBlockId]
    console.log('scrolling to', scrollTo)
    this.setState({scrollTo})
  }


  componentDidMount() {
    window.addEventListener("resize", this._handleResize)
    if(window.innerWidth < 1601 ) {
      headerOffset = 66
    }
    setTimeout(() => {
      this.setState({anchorCoords: this._getAnchorCoords(this.anchorBlocks, headerOffset)})
    }, 1000)
  }

  render() {
    const {articles} = this.props
    const {scrollTo} = this.state
    return (
      <A_Container mix={cn()}>

        <Menu
          mix={cn('menu')}
          articles={articles}
          setScrollTo={this.setScrollTo}
        />

        <div className={cn('articles')}>
          <CustomScroll
            heightRelativeToParent='100%'
            scrollTo={scrollTo}
            onScroll={this._handleScroll}
          >
            {articles.map((article) => (
              <Article
                anchorRef={(domNode) => {this.anchorBlocks = {...this.anchorBlocks, [article.id]: domNode}}}
                key={article.id}
                mix={cn('article')}
                articleData={article}
              >

                <div className={cn('sections')}>
                  {article.sections.map((section) => {
                    return (
                      <Section
                        anchorRef={(domNode) => {this.anchorBlocks = {...this.anchorBlocks, [section.id]: domNode}}}
                        key={section.id}
                        mix={cn('section')}
                        sectionData={section}
                      />
                    )
                  })}
                </div>
              </Article>
            ))}
          </CustomScroll>
        </div>

      </A_Container>
    )
  }
}


export default KnowledgeBase;
