import React, { Component } from 'react'
// import * as T from "prop-types";
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('TeamSectionSlide')
import A_Image from 'A_Image'
import M_Tooltip from 'M_Tooltip'

const getHazemName = () => (
  <span>
    Hazem Danny<br />Al-Nakib
  </span>
)

class TeamSectionSlide extends Component {
  state = {}

  getSlide = ({ imgSrc, position, name, bio }, i) => {
    name = name.search('Al-Nakib') === -1 ? name : getHazemName()
    return (
      <div className={cn('person')} key={i}>
        <div className={cn('person-image')}>
          <A_Image src={imgSrc} rounded />
        </div>
        <p className={cn('person-name')}>{name}</p>
        <p className={cn('person-title')}>{position}</p>
      </div>
    )
  }

  render() {
    const { persons, groupName, hidden } = this.props
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
