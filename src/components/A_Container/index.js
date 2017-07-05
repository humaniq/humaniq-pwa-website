import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Container')

const A_Container = ({children, wide}) =>(
  <div className={cn({wide})}>{children}</div>
)

A_Container.propTypes = {
};

A_Container.defaultProps = {
}
export default A_Container