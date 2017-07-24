import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Crumbs')
import A_Link from 'A_Link';

const O_Сrumbs = ({path}) =>{
  const crumbs = path.map( (link, i, arr) => {
    const notLast = i+1 !== arr.length
    const type = notLast ? 'crumbs-notlast' : 'crumbs'
    return(
      <A_Link type={type} key={'key_' + i} to={link.url} >{link.name}</A_Link>
    )
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