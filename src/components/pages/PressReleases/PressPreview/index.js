import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('PressPreview')

const PressPreview = ({mix, title, date, text}) => (
  <div className={cn([mix])}>
    <p className={cn('title')}>{title}:</p>
    <p className={cn('date')}>{date}</p>
    <p className={cn('text')}>{text}</p>
  </div>
)



PressPreview.propTypes = {
  mix: T.string
}

export default PressPreview