import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Container')

const A_Container = ({children, type}) =>(
  <div className={cn({type})}>{children}</div>
)

A_Container.propTypes = {
  type: T.oneOf([
    'video-hero', // video-hero
    'init', // only side paddings
    'section-hmq', // descktop: 32/40 tablet: 32/16, no bottom line
    'wide', // wide container
    'mob-wide-line', // wide border line 40/16
    'section', // container with paddings-top 32, padding-bottom, and border-bottom margin-bottom
    'section-long-text', //container with paddings-top 32
    'section-clean', // container with paddings-top 32, witout border bottom and margin bottom
    'section-interactive', // container with paddings-top 32, padding-bottom,
    'equal', // container with paddings-top 32, margin-bottom 40, does't chage on device, no bottom line
    'section-wiki' //container addings-top 32, margin-bottom 16, padding-bottom 15, line, center
  ]),
  children: T.node.isRequired
};

A_Container.defaultProps = {
}
export default A_Container