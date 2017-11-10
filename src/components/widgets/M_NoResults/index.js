import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_NoResults')

const M_NoResults = ({request}) =>(
  <div className={cn('root')}>
    <p className={cn('first')}>Sorry! We looked everywhere, but couldn't find “<span className={cn('request')}>{request}</span>”. 💔 🔍</p>
    <p className={cn('second')}>Try a different search, or browse our help topics instead.</p>
  </div>
)

M_NoResults.propTypes = {
  request: T.string.isRequired
};

M_NoResults.defaultProps = {
  request: ''
}
export default M_NoResults