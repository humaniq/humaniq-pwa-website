import React, { PropTypes } from 'react';
import './styles.scss';
import {Link} from 'react-router'
import {cssClassName} from 'utils'
const cn = cssClassName('O_HeaderNavBtn')

const O_HeaderNavBtn = ({dark, children, ...props}) =>(
  <Link className={cn({dark})} {...props}>
    {children}
  </Link>
)

O_HeaderNavBtn.propTypes = {
};

O_HeaderNavBtn.defaultProps = {

}

export default O_HeaderNavBtn