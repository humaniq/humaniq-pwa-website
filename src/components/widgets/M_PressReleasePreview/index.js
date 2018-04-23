import React from 'react'
// import * as T from "prop-types";
import {Link} from 'react-router'

import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('M_PressReleasePreview')

const M_PressReleasePreview = ({ title, releaseDate, mix, _id, type }) => {
  return (
    <div className={cn('item', [mix])}>
      {
        type === 'single' ?
          <h3 className={cn('item-title', {type})}>{title}</h3>
          : <Link to={`/press-releases/${_id}`} className={cn('item-title')}>{title}</Link>
      }
      <p className={cn('item-date')}>{releaseDate}</p>
    </div>
  )
}

M_PressReleasePreview.propTypes = {}

M_PressReleasePreview.defaultProps = {}

export default M_PressReleasePreview
