import React, {Component} from 'react';
import * as T from "prop-types";
import MainLayoutContainer from 'containers/MainLayoutContainer'
import {fetchWiki} from "AC/wiki";
// import initialLoad from 'utils/initialLoad'

class AppRoute extends Component {

  static prepareData({dispatch}) {
    // if(initialLoad()) return;
    return dispatch(fetchWiki())
  }

  render() {
    return (
      <MainLayoutContainer>
        {this.props.children}
      </MainLayoutContainer>
    )
  }
}

AppRoute.propTypes = {
  children: T.any.isRequired
};

export default AppRoute;

