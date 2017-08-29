import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Crumbs')
import A_Link from 'A_Link';

const O_Сrumbs = ({path, notLink}) =>{
  const crumbs = path.map( (item, i, arr) => {
    const notLast = i+1 !== arr.length
    const type = notLast ? 'crumbs-notlast' : 'crumbs'
    if(notLink){
      return(
        <span key={'key_' + i} className={cn('not-links', {'not-last': notLast})}>{item.name}</span>
      )
    } else{
      return(
        <A_Link type={type} key={'key_' + i} to={item.url} >{item.name}</A_Link>
      )
    }
  })

  return(
    <div className={cn('root')}>{crumbs}</div>
  )
}

O_Сrumbs.propTypes = {
  path: T.array.isRequired
};

O_Сrumbs.defaultProps = {
  path: []
}
export default O_Сrumbs