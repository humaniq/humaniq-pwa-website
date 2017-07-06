import React from 'react';
import * as T from "prop-types";
import {Link} from 'react-router'
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Link')

const A_Link = ({children, block, mod, disabled, external, addClassName, color, to, ...props}) => {
  mod = disabled || mod

  let _link
  if (external) {
    _link =(
      <a href={to}>{children}</a>
    )
  } else {
    _link =(
      <Link className={cn({block, mod, disabled, color}, [addClassName, block])} {...props} to={to}>
        {children}
      </Link>
    )
  }
  return _link
}
A_Link.propTypes = {
  children: T.any.isRequired
};

export default A_Link