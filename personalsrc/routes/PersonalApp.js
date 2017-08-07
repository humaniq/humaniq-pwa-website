import React, {Component} from 'react';
import * as T from "prop-types";
import initialLoad from 'utils/initialLoad'
import {fetchPersonalData} from 'store/entities/personal/actions'


class AppRoute extends Component {

  static prepareData({dispatch}, query, params) {
    const {invitationCode} = params
    if(initialLoad()) return;
    return (
      dispatch(fetchPersonalData(invitationCode))
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

