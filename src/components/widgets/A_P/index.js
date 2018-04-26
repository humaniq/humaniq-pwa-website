import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_P')

const A_P = ({children, type, mix}) =>(
  <p className={cn({type}, [mix])}>{children}</p>
)

A_P.propTypes = {
  type: T.oneOf([
    'animated-hero',
    'video-hero',
    'hmq-e', //
    'hero', // 15/26 + blue border on left side
    'first', // 	18/28
    'second', // 14
    'third', // 15/26
    'third-center', // 15/26 + alight-text: center
    'fourth', // 15/26.600 brand blue
    'fifth', // 13/1.54 grey
    'third-center_white', // 15/26 + alight-text: center
    'third-center_white', // 15/26 + alight-text: center
    'sixth', // 13/20 #48474c
    'android-white', // 13/20 white
    'android-black', // 13/20 #565759 padding-top: 1.5rem padding-bottom: 4rem
  ]),
};

A_P.defaultProps = {
}
export default A_P