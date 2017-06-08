import React, {Component} from 'react';
import PropTypes from "prop-types";
import MainLayoutContainer from 'containers/MainLayoutContainer'
import {fetchStaticData} from "AC/content";
class AppRoute extends Component {

  static prepareData({dispatch}) {
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
  children: PropTypes.any.isRequired
};

export default AppRoute;

