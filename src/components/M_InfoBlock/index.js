import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_InfoBlock')

const M_InfoBlock = ({children}) => (
  <div className={cn()}>{children}</div>
)

M_InfoBlock.propTypes = {
  children: T.any.isRequired
};

M_InfoBlock.defaultProps = {
}
export default M_InfoBlock