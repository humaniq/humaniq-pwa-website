import React from 'react'
// import * as T from "prop-types";
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('TeamSectionSlide')
import A_Image from 'A_Image'

const getHazemName = () => <span>Hazem Danny<br />Al-Nakib</span>

const TeamSectionSlide = ({persons, groupName, mix}) => {
  const getSlide = ({imgSrc, position, name}, i) => (
    <div className={cn('person')} key={i}>
      <div className={cn('person-image')}>
        <A_Image src={imgSrc} rounded />
      </div>
      <p className={cn('person-name')}>{name.search('Al-Nakib') === -1 ? name : getHazemName()}</p>
      <p className={cn('person-title')}>{position}</p>
    </div>
  )
  const renderTitle = groupName && <span className={cn('group-name')}>{groupName}</span>
  const renderSlides = persons.map(getSlide)
  return (<div className={cn({wide: !!groupName}, [mix])}>{renderTitle}{renderSlides}</div>)
}

TeamSectionSlide.propTypes = {}

TeamSectionSlide.defaultProps = {}
export default TeamSectionSlide
