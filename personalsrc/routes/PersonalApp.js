import React, {Component} from 'react';
import * as T from "prop-types";
import initialLoad from 'utils/initialLoad'
import {fetchPersonalData} from 'entities/personal/actions'


class AppRoute extends Component {

  static prepareData({dispatch}, /* query, params */) {
    if(initialLoad()) return;
    // const {invitationCode} = params

    return (
      // dispatch(fetchPersonalData(invitationCode))
      // dispatch(fetchPersonalData('c4e393a6-ec4c-4296-bfd7-cfe22b64f763'))

      dispatch(fetchPersonalData())

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

