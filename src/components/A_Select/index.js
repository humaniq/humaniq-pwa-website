import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Select')

const A_Select = ({children, ...props}) =>{
  return(
    <div className={cn()}>{children}</div>
  )
}

A_Select.propTypes = {
};

A_Select.defaultProps = {
}
export default A_Select