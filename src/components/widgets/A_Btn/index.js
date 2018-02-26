import React, { PropTypes } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {Link} from 'react-router'
import {cssClassName} from 'utils'
const cn = cssClassName('A_Btn')
import M_Ripple from 'M_Ripple'
import history from 'history'

const A_Btn = ({type, mix, children, disabled, btnType, to, onClick, ...props}) =>{

  disabled = disabled && 'disabled'

  switch(type){
    case 'window-link':
      return (
        <Link className={cn('link', {type}, [disabled, mix])} disabled={disabled} external {...{onClick, to, ...props}}>
          {children}
        </Link>
      )
    case 'inline':

      return (
        <Link className={cn('link', {type}, [disabled, mix])} disabled={disabled} {...{onClick, to, ...props}}>
          {children}
        </Link>
      )
    case 'standart-form':
    case 'nav-btn':
      return (
        <M_Ripple {...{onClick}}>
          <button className={cn('button', {type}, [disabled])} type={btnType} {...props}>
            {children}
          </button>
        </M_Ripple>
      )
    case 'window':
    case 'link-standart-form':
    case 'link-subscribe':
    case 'material-r-link':
    case 'material-r-link-h':
    case 'material-r-link-window':
      return (
        <M_Ripple onClick={()=> history.push(to)} className={cn('ripple', {type}, [mix])}>
          <Link className={cn('link', {type}, [disabled])} {...props}>
            {children}
          </Link>
        </M_Ripple>
      )
    case 'popup-link':
      return (
        <M_Ripple {...{onClick}} className={cn('ripple', {type}, [mix])}>
          <div className={cn('link', {type}, [disabled])} type={btnType} {...props}>
            {children}
          </div>
        </M_Ripple>
      )
    default:
      return (
        <button className={cn('button', {type}, [disabled, mix])} type={btnType} {...{onClick,...props}}>
          {children}
        </button>
      )
  }
}

A_Btn.propTypes = {
  type: T.oneOf([
    'material-r-link-window', // material-r-link used on simple form pages
    'material-r-link', // link that looks like material raised button
    'personal-nav-btn', // 170x82 white ripple link style button 100%/100%, padding: 0 1.3rem
    'popup-link', // popup link
    'nav-btn', // 82 white ripple link style button 100%/100%, padding: 0 1.3rem
    'link-subscribe', //big blue button used on home page
    'standart-form', // normal blue button with white text
    // 'link-standart-form', // link looks like standart form  blue button with white text
    'window', //big wide blue button, used on simple form pages
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