import React from 'react';
import * as T from "prop-types";
import styles from './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_ReadMore')

const M_ReadMore = ({children, ...props}) =>(
  <span className={cn()}>  Read more
    <img className={cn('img')} src="/img/readMore.png" />
  </span>
)

M_ReadMore.propTypes = {
};

M_ReadMore.defaultProps = {
}
export default M_ReadMore