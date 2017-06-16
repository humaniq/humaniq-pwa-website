import React, {Component} from 'react';
import * as T from "prop-types";
import styles from './styles.scss';
import {cssClassName} from 'utils'
import O_Hero from 'O_Hero'
import O_News from 'O_News'

const cn = cssClassName('SE_Home')

class SE_Home extends Component {
  render() {
    return (
      <div className={cn()}>
        <O_Hero/>
        <O_News/>
      </div>
    )
  }
}

SE_Home.propTypes = {
};

SE_Home.defaultProps = {
}


export default SE_Home;

