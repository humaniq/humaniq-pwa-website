import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_ScrollScreen')

const M_ScrollScreen = ({children}) =>{
  return(
    <div>
      {children}
      <div className={cn('screen')}/>
    </div>
  )
}

M_ScrollScreen.propTypes = {
};

M_ScrollScreen.defaultProps = {
}
export default M_ScrollScreen