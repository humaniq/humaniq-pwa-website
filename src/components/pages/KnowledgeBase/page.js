import React, {Component} from 'react'
import CustomScroll from 'react-custom-scroll'
import 'react-custom-scroll/dist/customScroll.css'
import { Motion, spring } from 'react-motion'
import ScrollHandler from './ScrollHandler'
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
    anchorCoords: {},
    scrollMotionActive: false
  }

  _getAnchorCoords = (anchorBlocks, headerOffset) => {
    const scrollPosition = this.refs.customScroll.refs.innerContainer.scrollTop
    console.log('scrollPosition',scrollPosition)

    let anchorCoords = {}
    Object.entries(anchorBlocks).forEach((anchorBlock) => {
      const
        [id, block] = anchorBlock,
        offset = headerOffset + pageYOffset - scrollPosition,
        topCoord = Math.round(block.getBoundingClientRect().top - offset),
        bottomCoord = Math.round(block.getBoundingClientRect().bottom - offset)

      anchorCoords = {...anchorCoords, [id]: {top: topCoord, bottom: bottomCoord}}
    });
    return anchorCoords
  }

  _handleResize = () => {
    if(window.innerWidth < 1025) {
      this.setState({anchorCoords: this._getAnchorCoords(this.anchorBlocks, headerOffset)})
    }
  }

  _handleScroll = (e) => {
    const scrollPosition = e.target.scrollTop

    this.setState({scrollPosition})
    this._setcurrentAnchorId(scrollPosition)
  }

  _setcurrentAnchorId = (scrollPosition) => {
    const { anchorCoords } = this.state

    let currentAnchorId = []
    for (let anchorId in anchorCoords) {
      if(anchorCoords.hasOwnProperty(anchorId)) {
        const anchor = anchorCoords[anchorId]
        if (scrollPosition >= anchor.top && scrollPosition < anchor.bottom) {
          currentAnchorId = [...currentAnchorId, anchorId]
        }
      }
    }

    this.setState({ currentAnchorId })
  }

  setScrollTo = (anchorBlockId) => {
    const { anchorCoords } = this.state

    const scrollTo = anchorCoords[anchorBlockId].top

    this.setState({scrollTo, scrollMotionActive: true})
  }

  finishScrollMotion = () => {
    this.setState({scrollMotionActive: false})
  }


  componentDidMount() {
    window.addEventListener("resize", this._handleResize)

    if(window.innerWidth < 1601 ) {
      headerOffset = 66
    }

    setTimeout(() => {
      this.setState({anchorCoords: this._getAnchorCoords(this.anchorBlocks, headerOffset)})
    }, 2000)

    console.log(this)
    window.testRef = this.refs.customScroll.refs.innerContainer
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._handleResize)
  }

  render() {
    console.log('render')
    const {articles} = this.props
    const {scrollTo, scrollPosition, currentAnchorId, scrollMotionActive} = this.state
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
            ref="customScroll"
            heightRelativeToParent='100%'
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

        {scrollMotionActive ? (
          <Motion
            defaultStyle={{
              scrollMotionProgress: scrollPosition //from
            }}
            style={{
              scrollMotionProgress: spring(scrollTo, {stiffness: 260, damping: 26}) //to
            }}
          >
            {({scrollMotionProgress}) => {
              return(
                <ScrollHandler
                  scrollContainer={this.refs.customScroll.refs.innerContainer}
                  scrollTo={scrollTo}
                  scrollMotionProgress={scrollMotionProgress}
                  finishScrollMotion={this.finishScrollMotion}
                />
              )

            }}

          </Motion>) : (null)}

      </A_Container>
    )
  }
}


export default KnowledgeBase;
