import React, { PropTypes } from 'react';
import styles from './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Title')

const M_Title = ({children}) =>(
  <h1 className={cn()}>{children}</h1>
)

M_Title.propTypes = {
};

M_Title.defaultProps = {
}
export default M_Title