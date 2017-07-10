import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Image')
import isInitialLoad from 'utils/initialLoad'

class A_Image extends Component {

  state = {imgReady: false}

  handleLoad = () => {
    this.setState({imgReady: true})
  }

  componentWillReceiveProps(nextProps){
    if(this.props.src !== nextProps.src){
      this.setState({imgReady: false})
    }
  }
  componentDidMount(){
    const complete = this.node && this.node.complete
    if(isInitialLoad() && complete){
      this.forceUpdate()
    }
  }

  render() {
    let {rounded, realSize, link, ...preProps} = this.props
    const {onClick, objectFit, ...props} = preProps
    const complete = !!this.node && this.node.complete
    const imgReady = complete || this.state.imgReady
    rounded = rounded && 'rounded'
    link = link && 'link'
    realSize = realSize && 'real-size'

    return (
      <span className={cn('root')} >
        <img
          ref={ node => this.node = node }
          className={cn('img', {onClick: !!onClick, objectFit}, [rounded, link, realSize])}
          onLoad = {this.handleLoad}
          style={imgReady ? {} : {display: 'none'}}
          onClick={onClick}
          {...props}
        />
        <div style={imgReady ? {display: 'none'} : {}} className={cn('loader')} >
          loading
        </div>
      </span>
    )
  }
}

A_Image.propTypes = {
  src: T.string.isRequired,
  width: T.number,
  height: T.number,
  alt: T.string.isRequired,
  onClick: T.func,
  objectFit: T.oneOf([
    'contain', // increases or decreases the size of the image to fill the box whilst preserving its aspect-ratio.
    'cover-hidden' // height 100% of widht
  ]),
  realSize: T.bool, // width and height auto
  rounded: T.bool, // remove space under the image in links
  link: T.bool // remove space under the image in links
}

A_Image.defaultProps = {
  src: 'https://dummyimage.com/100x50/fff7ff/e0557d&title=NoPhoto',
  alt: '',
}

export default A_Image