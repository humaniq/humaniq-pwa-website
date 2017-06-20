import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_H1')

const A_H1 = ({children}) =>(
  <h1 className={cn()}>{children}</h1>
)

A_H1.propTypes = {
  children: T.any.isRequired
};

A_H1.defaultProps = {
}
export default A_H1