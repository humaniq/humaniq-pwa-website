import React from 'react'
// import * as T from "prop-types";
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('TeamSectionSlide')
import A_Image from 'A_Image'
import M_Tooltip from 'M_Tooltip'

const getHazemName = () => <span>Hazem Danny<br />Al-Nakib</span>

const TeamSectionSlide = ({persons, groupName, hidden}) => {
  const getSlide = ({imgSrc, position, name, bio}, i) => (
    <div className={cn('person')} key={i}>
      <div className={cn('person-image')}>
        <A_Image src={imgSrc} rounded />
      </div>
      <p className={cn('person-name')}>{name.search('Al-Nakib') === -1 ? name : getHazemName()}</p>
      <p className={cn('person-title')}>{position}</p>

      {bio &&
        <span className={cn('tooltip')} >
          <M_Tooltip type={'bottom'}>{bio}</M_Tooltip>
        </span>
      }
    </div>
  )
  const renderTitle = groupName && <span className={cn('group-name')}>{groupName}</span>
  const renderSlides = persons.map(getSlide)
  return (<div className={cn({wide: !!groupName, hidden})}>{renderTitle}{renderSlides}</div>)
}

TeamSectionSlide.propTypes = {}

TeamSectionSlide.defaultProps = {}
export default TeamSectionSlide
