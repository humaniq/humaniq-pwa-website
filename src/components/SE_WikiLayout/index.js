import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils';
import O_Search from 'O_Search';
const cn = cssClassName('SE_WikiLayout');

class SE_WikiLayout extends Component {
  render() {
    const {children} = this.props;

    return (
      <div>
        <div className={cn('root')}>
          <div className={cn('search')}>
            <O_Search />
          </div>
          {children}
        </div>
      </div>
    )
  }
}

SE_WikiLayout.propTypes = {
  children: T.any.isRequired,
};

export default SE_WikiLayout
