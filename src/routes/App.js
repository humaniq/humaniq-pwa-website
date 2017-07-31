import React, {Component} from 'react';
import * as T from "prop-types";
import MainLayoutContainer from 'containers/MainLayoutContainer'
import initialLoad from 'utils/initialLoad'
import {setRoute} from 'AC/navigation'
// import {requestHmqTransactions, fetchHmqStatistics, fetchHmqMarkets} from 'AC/hmqExp'


class AppRoute extends Component {

  static prepareData({dispatch}, query, params, location) {
    if(initialLoad()) return;
    dispatch(setRoute(location.pathname))
    // dispatch(fetchHmqStatistics())
    // dispatch(fetchHmqMarkets())
    // dispatch(requestHmqTransactions())
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

