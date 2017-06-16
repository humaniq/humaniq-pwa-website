import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Title')

const M_Title = ({children, type}) =>{
  if(type === 'main'){
    return <h1 className={cn({type})}>{children}</h1>
  }else{
    return <h3 className={cn({type})}>{children}</h3>
  }
}

M_Title.propTypes = {
  children: T.any.isRequired
};

M_Title.defaultProps = {
}
export default M_Title