import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Cases')

const SE_Cases = () => (
  <div className={cn()}>
    тут будет Cases
  </div>
)

SE_Cases.propTypes = {};

SE_Cases.defaultProps = {}

export default SE_Cases