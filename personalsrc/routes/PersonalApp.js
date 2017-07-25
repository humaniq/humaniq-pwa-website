import React, {Component} from 'react';
import * as T from "prop-types";
import {fetchWiki} from "AC/wiki";
import {fetchPartners} from 'AC/otherAPI'
import initialLoad from 'utils/initialLoad'
import {setRoute} from 'AC/navigation'
import {requestHmqTransactions} from 'AC/hmqExp'


class AppRoute extends Component {

  static prepareData({dispatch}, query, params, location) {
    if(initialLoad()) return;
    return (
      dispatch(fetchWiki())
        .then(dispatch(fetchPartners()))
        .then(dispatch(requestHmqTransactions()))
        .then(dispatch(setRoute(location.pathname)))
    )
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

AppRoute.propTypes = {
  children: T.any.isRequired
};

export default AppRoute;

