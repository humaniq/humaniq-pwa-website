import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Subscribe')

const SE_Subscribe = () => (
  <div className={cn()}>
    тут будет subscribe
  </div>
)

SE_Subscribe.propTypes = {};

SE_Subscribe.defaultProps = {}

export default SE_Subscribe