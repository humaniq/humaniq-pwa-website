import React, {Component} from 'react';
import * as T from "prop-types";
import styles from './wide.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_SliderWide')
import O_Carousel from './carousel';
import A_H from 'A_H'
import A_Container from 'A_Container'


class O_SliderWide extends Component {

  state = {hover:false}

  componentDidMount(){
    this.node.on('mouseover', this.setState({hover: true}))
    this.node.on('mouseout', this.setState({hover: false}))

  }

  getSlides(slides, hover) {
    return (
      slides.map((slide, i) => {
        return (
          <div key={'key_' + i}>
            <div className={cn('slide')} >
              <img className={cn('image', {hover})} src={slide.img} width="220" height="220"/>
              <div className={cn('text')}>
                <A_H type="h4" href="#">{slide.title}</A_H>
                <div className={cn('description')} dangerouslySetInnerHTML={{__html: slide.html}}/>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  next = () => {
    this.refs.reactSwipe.next();
  }

  prev = () => {
    this.refs.reactSwipe.prev();
  }

  render() {

    const{hover} = this.state

    const {slides} = this.props
    const swipeOptions = {
      startSlide: 0,
      auto: 0,
      speed: 300,
      continuous: true
    }

    return (
      <section className={cn()}>
        <A_Container>
          <div className={cn('inner')} ref={node => this.node = node}>
            <div className={cn('prev')} onClick={this.prev}>{'  '}</div>
            <O_Carousel ref="reactSwipe" {...{swipeOptions}}>
              {this.getSlides(slides, hover)}
            </O_Carousel>
            <div className={cn('next')} onClick={this.next}>{'  '}</div>
          </div>
        </A_Container>
      </section>
    )
  }
}

O_SliderWide.propTypes = {};

O_SliderWide.defaultProps = {}

export default O_SliderWide