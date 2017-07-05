import React, { PropTypes } from 'react';
import './styles.scss';
import {Link} from 'react-router'
import {cssClassName} from 'utils'
const cn = cssClassName('A_Btn')

const A_Btn = ({style, type, children, disabled, ...props}) =>{

  disabled = disabled && 'disabled'

  let _btn;
  if(type === 'link'){
    _btn = (
      <Link className={cn({type, style}, [disabled])} disabled={disabled} {...props}>
        {children}
      </Link>
    )
  } else {
    _btn = (
      <button className={cn({type, style}, [disabled])} type={type} {...props}>
        {children}
      </button>
    )
  }

  return _btn
}
A_Btn.propTypes = {
};

A_Btn.defaultProps = {
  to: '#',
  type: 'button',
  style: 'common'
}

export default A_Btn