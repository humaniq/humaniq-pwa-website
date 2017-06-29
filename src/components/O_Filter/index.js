import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_ButtonLink from 'A_ButtonLink'

const cn = cssClassName('O_Filter')

const O_Filter = ({entity}) => (
  <div className={cn()}>
    <span className="holder">filter</span>
    <A_ButtonLink size="xs" to="#" color="secondary_dark">Filter</A_ButtonLink>
  </div>
)

O_Filter.propTypes = {};

export default O_Filter

