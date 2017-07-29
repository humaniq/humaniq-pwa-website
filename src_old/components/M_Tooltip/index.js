import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Tooltip')

const M_Tooltip = ({children, type}) =>{
  return(
      <div className={cn('wrapper')}>
        <div className={cn('root', {type})}>
          {children}
        </div>
      </div>
  )
}

M_Tooltip.propTypes = {
  type: T.oneOf([
    'left',
    'right',
    'top',
    'bottom',
  ]),
};

M_Tooltip.defaultProps = {
  type: 'right'
}
export default M_Tooltip