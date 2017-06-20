import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_H3')

const A_H3 = ({children, className}) =>(
  <h3 className={cn([className])}>{children}</h3>
);

A_H3.propTypes = {
  children: T.any.isRequired
};

A_H3.defaultProps = {
};

export default A_H3