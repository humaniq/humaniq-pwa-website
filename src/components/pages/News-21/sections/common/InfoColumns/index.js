import React from 'react'
import * as T from 'prop-types'
import A_Title from 'A_Title_H'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('M_InfoColumns')

const _createInfoColumns = columns =>
  columns.map((column, index) => (
    <div key={`info-column-${index + 1}`} className={cn('column')}>
      {column.imageSrc ? <img className={cn('column-image')} src={column.imageSrc} /> : null}

      <A_Title mix={cn('column-title')} type="info-column" theme="dark">
        {column.title}
      </A_Title>
      <p className={cn('column-text')}>{column.text}</p>
    </div>
  ))

const M_InfoColumns = ({ mix, columns, type, layout }) => (
  <div className={cn([mix], { type, layout })}>{_createInfoColumns(columns)}</div>
)

export default M_InfoColumns

M_InfoColumns.propTypes = {
  mix: T.string, //BEM mixin from parent block
  columns: T.array.isRequired, //Columns to render
  type: T.oneOf([
    'narrow', //400px column width
    'slider', //50% initial width for sliders
  ]),
  layout: T.oneOf([
    'global-challenge', //for global challenge sect
  ]),
}
