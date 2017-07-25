import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils';
import O_Search from 'O_Search';
import O_PersonalHeader from 'O_PersonalHeader';
const cn = cssClassName('SE_WikiLayout');
import history from 'history'

class SE_WikiLayout extends Component {



  handleSubmit = (searchString) => {
    history.push('/wiki/search?searchTerm=' + searchString)
  }
  render() {
    const {children, searchRequest} = this.props;

    return (
      <div className={cn('root')}>
        <div className={cn('root')}>
          <div className={cn('search')}>
            <O_PersonalHeader type="avatar-sm" />
          </div>
          <O_Search
            title="Welcome to Humaniq wiki"
            placeholder="Search anything"
            value={searchRequest}
            handleSubmit={this.handleSubmit}
          />
        </div>
        {children}
      </div>
    )
  }
}

SE_WikiLayout.propTypes = {
  children: T.any.isRequired,
  searchRequest: T.string
};

export default SE_WikiLayout