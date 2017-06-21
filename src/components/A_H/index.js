import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_H')

const A_H = ({type, children}) =>(
  React.createElement(
    type,
    {className: cn({type})},
    children
  )
)

A_H.propTypes = {
  children: T.any.isRequired
};

A_H.defaultProps = {
}
export default A_H