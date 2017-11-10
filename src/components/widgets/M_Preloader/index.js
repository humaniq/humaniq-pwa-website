import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('M_Preloader');


class M_Preloader extends Component {

  render() {
    return (
      <div className={cn('preload')}>
        <h3 className={cn('loading')}>loading...</h3>
        <svg className={cn('spinner')} viewBox="0 0 50 50">
          <circle className={cn('path')} cx="25" cy="25" r="20" fill="none" strokeWidth="3" />
        </svg>
      </div>
    )
  }
}


M_Preloader.propTypes = {};

export default M_Preloader