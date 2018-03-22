import React, { Component } from 'react'
// import * as T from "prop-types";
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('TeamSectionModal')
import A_Image from 'A_Image'

class TeamSectionModal extends Component {


  render() {
    const { closeModal, isActive, personData:{name, groupName, position, bio, imgSrc} } = this.props
    return (
      <div className={cn({ opened: isActive })} onClick={closeModal}>
        <div className={cn('inner')} onClick={e => e.stopPropagation()}>
          <header className={cn('header')}>
            <h3 className={cn('header-title')}>{groupName && groupName.charAt(0).toUpperCase() + groupName.slice(1)}</h3>
            <img
              className={cn('header-btn')}
              src="img/icons/close-people.svg"
              onClick={closeModal}
            />
          </header>
          <div className={cn('person')}>
            <div className={cn('person-image')}>
              <A_Image src={imgSrc} rounded />
            </div>
            <span className={cn('person-name')}>{name}</span>
            <span className={cn('person-title')}>{position}</span>
            <p className={cn('person-bio')}>{bio}</p>
          </div>
        </div>
      </div>
    )
  }
}

TeamSectionModal.propTypes = {}

TeamSectionModal.defaultProps = {
  closeModal: () => {},
  isActive: false,
  personData:{
    groupName: '',
    name:'',
    position: '',
    bio: ''
  }
}

export default TeamSectionModal
