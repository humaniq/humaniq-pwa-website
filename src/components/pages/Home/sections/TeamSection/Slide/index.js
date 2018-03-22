import React, { Component } from 'react'
// import * as T from "prop-types";
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('TeamSectionSlide')
import A_Image from 'A_Image'

const getHazemName = () => (
  <span>
    Hazem Danny<br />Al-Nakib
  </span>
)

class TeamSectionSlide extends Component {
  state = {}

  getSlide = ({ first, imgSrc, position, name, bio }, groupName, i) => {
    name = name.search('Al-Nakib') === -1 ? name : getHazemName()
    return (
      <div className={cn('person')} key={i} onClick={() => this.props.openPeopleModal({imgSrc, position, name, bio, groupName})}>
        <div className={cn('person-image')}>
          <A_Image src={imgSrc} rounded />
        </div>
        <p className={cn('person-name')}>{name}</p>
        <p className={cn('person-title')}>{position}</p>
      </div>
    )
  }

  render() {
    const { persons, showGroupName, groupName, hidden } = this.props
    const renderTitle = showGroupName && groupName && <span className={cn('group-name')}>{groupName}</span>
    const renderSlides = persons.map((el, i) => this.getSlide(el, groupName, i))
    return (
      <div className={cn({ wide: showGroupName, hidden })}>
        {renderTitle}
        {renderSlides}
      </div>
    )
  }
}

TeamSectionSlide.propTypes = {}

TeamSectionSlide.defaultProps = {}
export default TeamSectionSlide
