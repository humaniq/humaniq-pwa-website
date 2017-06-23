import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Tooltip')

const M_Tooltip = ({message, children, hide = false}) =>{
  hide = (hide || !message) ? 'hide' : ''
  return(
    <span className={cn('wrapper')}>
      {children}
      <div className={cn('root', [hide])}>
        <div className={cn('text')}>{message}</div>
        <div className={cn('arrow')}/>
      </div>
    </span>
  )
}

M_Tooltip.propTypes = {
  children: T.any.isRequired
};

M_Tooltip.defaultProps = {
}
export default M_Tooltip