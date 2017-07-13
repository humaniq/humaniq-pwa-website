import React, { PropTypes } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {Link} from 'react-router'
import BtnImg from './BtnImg'
import {cssClassName} from 'utils'
const cn = cssClassName('A_Btn')

const A_Btn = ({type, children, disabled, btnType, ...props}) =>{

  disabled = disabled && 'disabled'

  switch(type){
    case 'interactive':
      return (
        <BtnImg {...{type, children, disabled, ...props}} />
      )
    case 'window':
    case 'inline':
    case 'link-standart-form':
    case 'link-subscribe':
      return (
        <Link className={cn('link', {type}, [disabled])} disabled={disabled} {...props}>
          {children}
        </Link>
      )
    case 'nav-btn':
    case 'standart-form':
    default:
      return (
        <button className={cn('button', {type}, [disabled])} type={btnType} {...props}>
          {children}
        </button>
      )
  }
}

A_Btn.propTypes = {
  type: T.oneOf([
    'nav-btn', // small white link style button
    'link-subscribe', //big blue button used on home page
    'standart-form', // normal blue button with white text
    'link-standart-form', // link looks like standart form  blue button with white text
    'window', //big wide blue button, used on simple form pages
    'interactive', //link button with hover bottom border
    'link', //link without styles display table
    'inline' //link without styles display inline
  ]).isRequired,
  btnType: T.oneOf([ // button tag attribute
    'button',
    'submit',
    'reset'
  ]),
  to: T.string.isRequired,
  disabled: T.bool
};

A_Btn.defaultProps = {
  to: '#',
  btnType: 'button'
}

export default A_Btn