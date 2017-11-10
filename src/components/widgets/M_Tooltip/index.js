import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Tooltip')

const M_Tooltip = ({children, type, size}) =>{
  return(
      <div className={cn('wrapper')}>
        <div className={cn('root', {type, size})}>
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
  size: T.oneOf([
    'wide', //50rem
    'normal', //24.5rem
  ]),
};

M_Tooltip.defaultProps = {
  type: 'right',
  size: 'normal'
}
export default M_Tooltip