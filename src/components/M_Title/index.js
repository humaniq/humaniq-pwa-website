import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Title')

const M_Title = ({children}) =>(
  <h1 className={cn()}>{children}</h1>
)

M_Title.propTypes = {
  children: T.any.isRequired
};

M_Title.defaultProps = {
}
export default M_Title