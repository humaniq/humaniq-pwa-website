import React, {Component} from 'react';
import T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Image')
import isInitialLoad from 'utils/initialLoad'
import LazyLoad from 'react-lazyload'

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
    let {rounded, realSize, link, type, ...preProps} = this.props
    const {onClick, objectFit, height, ...props} = preProps
    rounded = rounded && 'rounded'
    link = link && 'link'
    realSize = realSize && 'real-size'

    // TODO: set blur default image
    return (
      <span className={cn('root')} >
        <LazyLoad
          height={height}
          once
          offset={[-200, 0]}
          placeholder={(
            <div className={cn('placeholder-wrapper')} style={{height: height}}>
              <div
                className={cn('placeholder')}
                style={{height: height*0.7}}
              />
            </div>
          )}
          debounce={100}
        >
          <img
            ref={ node => this.node = node }
            className={cn('img', {onClick: !!onClick, objectFit, type}, [rounded, link, realSize])}
            onLoad = {this.handleLoad}
            onClick={onClick}
            {...props}
          />
        </LazyLoad>

      </span>
    )
  }
}

A_Image.propTypes = {
  src: T.string.isRequired,
  alt: T.string.isRequired,
  width: T.number,
  height: T.any.isRequired,
  onClick: T.func,
  objectFit: T.oneOf([
    'contain', // increases or decreases the size of the image to fill the box whilst preserving its aspect-ratio.
    'cover-hidden' // height 100% of widht
  ]),
  type: T.oneOf([
    'avatar',
    'avatar-sm'
  ]),
  realSize: T.bool, // width and height auto
  rounded: T.bool, // rounded Images.
  link: T.bool // remove space under the image in links
}

A_Image.defaultProps = {
  src: 'https://dummyimage.com/100x50/fff7ff/e0557d&title=NoPhoto',
  alt: '',
}

export default A_Image