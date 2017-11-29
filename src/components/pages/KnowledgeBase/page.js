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
    currentAnchorId: [],
    anchorCoords: {}
  }

  _getAnchorCoords = (anchorBlocks, headerOffset) => {
    let anchorCoords = {}
    Object.entries(anchorBlocks).forEach((achorBlock) => {
      const [id, block] = achorBlock
      const topCoord = Math.round(block.getBoundingClientRect().top - headerOffset + pageYOffset + this.state.scrollPosition)
      const bottomCoord = Math.round(block.getBoundingClientRect().bottom - headerOffset + pageYOffset + this.state.scrollPosition)
      anchorCoords = {...anchorCoords, [id]: {top: topCoord, bottom: bottomCoord}}
    });
    return anchorCoords
  }

  _handleResize = () => {
    if(window.innerWidth < 1025) {
      headerOffset = 66
      this.setState({anchorCoords: this._getAnchorCoords(this.anchorBlocks, headerOffset)})
    }
  }

  _handleScroll = (e) => {
    const { scrollTo } = this.state
    const scrollPosition = e.target.scrollTop
    this.setState({scrollPosition})
    this._setcurrentAnchorId(scrollPosition)
    console.log('scrollPosition',scrollPosition)
    console.log('scrollTo',scrollTo)
    if(scrollPosition !== scrollTo) this.setState({scrollTo: undefined})
  }

  _setcurrentAnchorId = (scrollPosition) => {
    const { anchorCoords } = this.state

    let currentAnchorId = []
    for (let anchorId in anchorCoords) {
      if(anchorCoords.hasOwnProperty(anchorId)) {
        const anchor = anchorCoords[anchorId]
        if (scrollPosition >= anchor.top && scrollPosition < anchor.bottom) {
          console.log(anchorId)
          currentAnchorId = [...currentAnchorId, anchorId]
        }
      }
    }

    this.setState({ currentAnchorId })
  }

  setScrollTo = (anchorBlockId) => {
    const scrollTo = this.state.anchorCoords[anchorBlockId].top
    this.setState({scrollTo})
  }


  componentDidMount() {
    window.addEventListener("resize", this._handleResize)
    if(window.innerWidth < 1601 ) {
      headerOffset = 66
    }
    setTimeout(() => {
      this.setState({anchorCoords: this._getAnchorCoords(this.anchorBlocks, headerOffset)})
    }, 2000)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._handleResize)
  }

  render() {
    console.log('render')
    const {articles} = this.props
    const {scrollTo, currentAnchorId} = this.state
    return (
      <A_Container mix={cn()}>

        <Menu
          mix={cn('menu')}
          articles={articles}
          setScrollTo={this.setScrollTo}
          currentAnchorId={currentAnchorId}
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
