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
    'hero', // 15/26 + blue border on left side
    'first', // 	18/28
    'second', // 14
    'third', // 15/26
    'third-center', // 15/26 + alight-text: center
    'third-center_white', // 15/26 + alight-text: center
    'fourth', // 15/26.600 brand blue
  ]),
};

A_P.defaultProps = {
}
export default A_P