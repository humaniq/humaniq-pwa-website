import React, {Component} from 'react';
import * as T from "prop-types";
import MainLayoutContainer from 'containers/MainLayoutContainer'
import {fetchStaticData} from "AC/content";
import initialLoad from 'utils/initialLoad'

class AppRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    return dispatch(fetchStaticData())
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

