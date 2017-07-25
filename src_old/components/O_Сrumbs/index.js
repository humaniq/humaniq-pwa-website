import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Crumbs')
import A_Link from 'A_Link';
import A_Container from 'A_Container';


const O_Сrumbs = ({path}) =>{
  const crumbs = path.map( (link, i, arr) => {
    const linkName = i+1 < arr.length ? link.name + ' >' : link.name
    return(
      <A_Link type='crumbs' key={'key_' + i} to={link.url} >{' '}{linkName}</A_Link>
    )
  })

  return(
    <A_Container type='section-clean'>
      <div className={cn('root')}>{crumbs}</div>
    </A_Container>
  )
}

O_Сrumbs.propTypes = {
  path: T.array.isRequired
};

O_Сrumbs.defaultProps = {
  path: []
}
export default O_Сrumbs