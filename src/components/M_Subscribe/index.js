import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Subscribe')
import A_Button from 'A_Button'

const M_Subscribe = () =>(
  <div className={cn('root')}>
    <input type="text" className={cn('input')}/>
    <button type="button" className={cn('button')}>
      NORMAL
    </button>
  </div>
)

M_Subscribe.propTypes = {
};

export default M_Subscribe