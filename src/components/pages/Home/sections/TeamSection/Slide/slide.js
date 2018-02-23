import React, { Component } from 'react'
// import * as T from "prop-types";
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('TeamSectionSlide')
import A_Image from 'A_Image'
import M_Tooltip from 'M_Tooltip'

class TeamSectionSlide extends Component {
  state = {
    hide: true,
  }


  componentDidMount(){
    this.forceUpdate()
  }
  render() {
    const {
      imgSrc,
      position,
      name,
      bio,
      mouseSlideEnterHandler,
      mouseSlideLeaveHandler,
    } = this.props
    const { hide } = this.state
    const { top, left } = (this.node && this.node.getBoundingClientRect()) || {top: 0, left: 0}
    return (
      <div
        className={cn('person')}

      >
        <div className={cn('person-image')}
             ref={node => (this.node = node)}
             onMouseEnter={() => mouseSlideEnterHandler(top, left, bio)}
             onMouseLeave={mouseSlideLeaveHandler}
        >
          <A_Image src={imgSrc} rounded />
        </div>
        <p className={cn('person-name')}>{name}</p>
        <p className={cn('person-title')}>{position}</p>
      </div>
    )
  }
}

TeamSectionSlide.propTypes = {}

TeamSectionSlide.defaultProps = {}
export default TeamSectionSlide
