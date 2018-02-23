import React, { Component } from 'react'
// import * as T from "prop-types";
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('TeamSectionSlide')
import A_Image from 'A_Image'
import M_Tooltip from 'M_Tooltip'
import SingleSLide from './slide'

const getHazemName = () => (
  <span>
    Hazem Danny<br />Al-Nakib
  </span>
)

class TeamSectionSlide extends Component {
  state = {}

  getSlide = ({ imgSrc, position, name, bio }, i) => {
    name = name.search('Al-Nakib') === -1 ? name : getHazemName()
    return(
      <SingleSLide {...{
        imgSrc, position, name, bio,
        mouseSlideEnterHandler: this.props.mouseSlideEnterHandler,
        mouseSlideLeaveHandler: this.props.mouseSlideLeaveHandler
      }} key={i}/>
    )
  }

  render() {
    const { persons, groupName, hidden } = this.props
    //   const {} = this.state

    const renderTitle = groupName && <span className={cn('group-name')}>{groupName}</span>
    const renderSlides = persons.map(this.getSlide)
    return (
      <div className={cn({ wide: !!groupName, hidden })}>
        {renderTitle}
        {renderSlides}
      </div>
    )
  }
}

TeamSectionSlide.propTypes = {}

TeamSectionSlide.defaultProps = {}
export default TeamSectionSlide
