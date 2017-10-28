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
  //children: T.any.isRequired,
};

export default O_Popup_H
