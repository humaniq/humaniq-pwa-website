import React, {Component} from 'react';
import * as T from "prop-types";
import O_SimpleForm_H from '../O_SimpleForm_H'
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Popup_H')

class O_Popup_H extends Component {

  render() {
    const { isActive, closePopup, popupType } = this.props

    return (
      <div className = {cn({isActive})}>
        <div
          className={cn('close-btn')}
          onClick={closePopup}
        />
        <div className= {cn('content')}>
          <O_SimpleForm_H
            formType={popupType}
          />
        </div>
      </div>
    )
  }
}


O_Popup_H.propTypes = {
  isActive: T.bool.isRequired, //popup is visible or not
  closePopup: T.func.isRequired, //close popup action
  popupType: T.oneOf([
    'subscribe', //popup with subscribe form inside
    'ambasadors' //popup with ambasadors form inside
  ])
};

export default O_Popup_H
