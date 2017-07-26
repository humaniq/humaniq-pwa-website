import React, {Component} from 'react';
import * as T from "prop-types";
import MainLayoutContainer from 'containers/MainLayoutContainer'
import {fetchWiki} from "AC/wiki";
import {fetchPartners} from 'AC/otherAPI'
import initialLoad from 'utils/initialLoad'
import {setRoute} from 'AC/navigation'
import {requestHmqTransactions, realtimeUpdatesConnect} from 'AC/hmqExp'


class AppRoute extends Component {

  static prepareData({dispatch}, query, params, location) {
    if(initialLoad()) return;
    return (
      dispatch(fetchWiki())
        .then(dispatch(fetchPartners()))
        .then(dispatch(requestHmqTransactions()))
        .then(dispatch(realtimeUpdatesConnect()))
        .then(dispatch(setRoute(location.pathname)))
    )
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

