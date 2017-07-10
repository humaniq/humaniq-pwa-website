import React, { PropTypes } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {Link} from 'react-router'
import BtnImg from './BtnImg'
import {cssClassName} from 'utils'
const cn = cssClassName('A_Btn')

const A_Btn = ({type, children, disabled, ...props}) =>{

  disabled = disabled && 'disabled'

  switch(type){
    case 'interactive':
      return (
        <BtnImg {...{type, children, disabled, ...props}} />
      )
    case 'inline':
    case 'link-subscribe':
      return (
        <Link className={cn('link', {type}, [disabled])} disabled={disabled} {...props}>
          {children}
        </Link>
      )
    default:
      return (
        <button className={cn('button', {type}, [disabled])} type={type} {...props}>
          {children}
        </button>
      )
  }
}
A_Btn.propTypes = {
  type: T.oneOf([
    'link-subscribe', //big blue button
    'interactive', //link button with hover bottom border
    'link', //link without styles display table
    'inline' //link without styles display inline
  ]),
  to: T.string.isRequired,
  disabled: T.bool
};

A_Btn.defaultProps = {
  to: '#'
}

export default A_Btn