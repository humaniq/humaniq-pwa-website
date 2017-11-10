import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('SE_HmqLayout');
import O_Fixed from 'O_Fixed'
import NavBar from './NavBar'
import history from 'history'

class SE_HmqLayout extends Component {

  handleSubmit = (searchString) => {
    history.push('/hmq-explorer/search?searchTerm=' + searchString)
  }

  render() {
    const {children, menu, hideSearch} = this.props;

    return (
      <div className={cn('root')}>
        <O_Fixed quite>
          <div className={cn('nav-menu')}><NavBar {...{menu, hideSearch}} handleSubmit={this.handleSubmit}/></div>
        </O_Fixed>
        {children}
      </div>
    )
  }
}

SE_HmqLayout.propTypes = {
  children: T.any.isRequired,
  menu: T.array.isRequired
};

export default SE_HmqLayout