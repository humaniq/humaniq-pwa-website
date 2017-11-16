import React from 'react'
import * as T from "prop-types"
import './styles.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('A_Btn_H');

const A_Btn_H = ({mix, children, type, formHasErrors, to}) => {
  switch(type) {
    case 'submit':
      return (
        <button
          className={cn([mix],{formHasErrors})}
          type='submit'
        >
          {children}
        </button>
      )
    default:
      return (
        <a className={cn([mix])} href={to} target='_blank' style={{display: 'inline-block'}}>
          {children}
        </a>
      )
  }

}

export default A_Btn_H

A_Btn_H.propTypes = {
  mix: T.string, //BEM mixin from parent block
  type: T.oneOf([
    'submit', // form submit btn
  ]),
  formHasErrors: T.bool // form error mod for submit-btn
}