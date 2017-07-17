import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_WikiLayout')

class SE_WikiLayout extends Component {
  render() {
    const {children} = this.props

    return (
      <div className={cn('root')}>
        <div className={cn('search')}>
          wiki
        </div>
        {children}
      </div>
    )
  }
}

SE_WikiLayout.propTypes = {
  children: T.any.isRequired,
};


export default SE_WikiLayout
