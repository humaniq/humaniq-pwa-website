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
    const {onClick, objectFit, rounded, realSize, ...props} = this.props
    const complete = !!this.node && this.node.complete
    const imgReady = complete || this.state.imgReady
    return (
      <span className={cn('root', [realSize && 'real-size'])} >
        <img
          ref={ node => this.node = node }
          className={cn('img', {onClick: !!onClick, objectFit}, [rounded && 'rounded'])}
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
  alt: T.string,
  onClick: T.func,
  objectFit: T.bool,
  rounded: T.bool,
}

A_Image.defaultProps = {
  src: 'https://dummyimage.com/100x50/fff7ff/e0557d&title=NoPhoto',
  alt: '',
}

export default A_Image