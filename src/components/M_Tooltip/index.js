import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Tooltip')

const M_Tooltip = ({children}) =>(
  <div className={cn()}>
    <div className={cn('text')}>{children}</div>
    <div className={cn('arrow')}/>
  </div>
)

M_Tooltip.propTypes = {
  children: T.any.isRequired
};

M_Tooltip.defaultProps = {
}
export default M_Tooltip