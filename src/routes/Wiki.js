import React, {Component} from 'react';
import WikiLayoutContainer from 'containers/WikiLayoutContainer'
import {fetchWiki} from "AC/wiki";
import initialLoad from 'utils/initialLoad'


class WikiLayoutRoute extends Component {

  static prepareData({dispatch}, query, params) {
    if(initialLoad()) return;
    dispatch(fetchWiki())
  }

  render() {
    return (
      <div>
        <WikiLayoutContainer >
          {this.props.children}
        </WikiLayoutContainer>
      </div>
    )
  }
}

export default WikiLayoutRoute;