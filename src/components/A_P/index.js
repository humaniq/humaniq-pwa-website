import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_P')

const A_P = ({children, type}) =>(
  <p className={cn({type})}>{children}</p>
)

A_P.propTypes = {
  type: T.oneOf([
    'first', // 	18/28
    'second', // 14
    'third', // 15/26
    'third-center' // 15/26 + alight-text: center
  ]),
};

A_P.defaultProps = {
}
export default A_P