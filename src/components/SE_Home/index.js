import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Home')


const SE_Home = () => (
  <div className={cn()}>
    тут будет главная
  </div>
)

SE_Home.propTypes = {

};

SE_Home.defaultProps = {
}

export default SE_Home