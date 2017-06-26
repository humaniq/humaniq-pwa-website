import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Wiki')

const SE_Wiki = () => (
  <div className={cn()}>
    тут будет вики

  </div>
)

SE_Wiki.propTypes = {};

SE_Wiki.defaultProps = {}

export default SE_Wiki