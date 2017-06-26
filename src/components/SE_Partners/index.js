import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Partners')

const SE_Partners = () => (
  <div className={cn()}>
    тут будет Partners
  </div>
)

SE_Partners.propTypes = {};

SE_Partners.defaultProps = {}

export default SE_Partners