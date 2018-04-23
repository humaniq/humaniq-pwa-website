import React from 'react'
// import * as T from "prop-types";

import { cssClassName } from 'utils'
const cn = cssClassName('O_PressReleasesList')
import M_PressReleasePreview from 'M_PressReleasePreview'
import './styles.scss'

const O_PressReleasesList = ({ entities, type }) => {
  const renderedItems = entities.map((props) => (
    <M_PressReleasePreview key={props._id} {...props}/>
  ))

  for(let i = 0; i<3 ; i++){
    renderedItems.push(<M_PressReleasePreview mix={cn('item-empty')} key={`empty-${i+1}`} />)
  }

  return <div className={cn({ type })}>{renderedItems}</div>
}

O_PressReleasesList.propTypes = {}

O_PressReleasesList.defaultProps = {
  entities:[]
}
export default O_PressReleasesList
