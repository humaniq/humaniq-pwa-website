import React from 'react'
// import * as T from "prop-types";

import { cssClassName } from 'utils'
const cn = cssClassName('O_CareersList')
import M_CareerPreview from 'M_CareerPreview'
import './styles.scss'

const O_CareersList = ({ entities, type }) => {
  const renderedItems = entities.map((props) => (
    <M_CareerPreview key={props._id} {...props}/>
  ))

  for(let i = 0; i<3 ; i++){
    renderedItems.push(<M_CareerPreview mix={cn('item-empty')} key={`empty-${i+1}`} />)
  }

  return <div className={cn({ type })}>{renderedItems}</div>
}

O_CareersList.propTypes = {}

O_CareersList.defaultProps = {
  entities:[]
}
export default O_CareersList
