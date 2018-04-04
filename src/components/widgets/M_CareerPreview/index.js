import React from 'react'
// import * as T from "prop-types";
import {Link} from 'react-router'

import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('M_CareerPreview')
const M_CareerPreview = ({ title, subtitle, createdAt, mix, _id, type }) => {
  return (
    <div className={cn('item', [mix])}>
      {
        type === 'single' ?
          <h3 className={cn('item-title', {type})}>{title}</h3>
          : <Link to={`/careers/${_id}`} className={cn('item-title')}>{title}</Link>
      }
      <p className={cn('item-subtitle')}>{subtitle}</p>
      <p className={cn('item-date')}>{createdAt}</p>
    </div>
  )
}

M_CareerPreview.propTypes = {}

M_CareerPreview.defaultProps = {}

export default M_CareerPreview
