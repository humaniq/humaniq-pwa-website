import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_H2')

const A_H2 = ({children}) =>(
  <h2 className={cn()}>{children}</h2>
);

A_H2.propTypes = {
  children: T.any.isRequired
};

A_H2.defaultProps = {
};

export default A_H2