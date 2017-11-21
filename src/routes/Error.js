import React, {Component} from 'react';
import T from "prop-types";
import Page from 'components/pages/Error/page'
import {setTheme} from 'store/entities/navigation/actions'
import initialLoad from 'utils/initialLoad'

class ErrorRoute extends Component {
  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setTheme('dark'))
  }
  render() {
    const {params:{err}, location:{query:{url, error}}} = this.props
    return (
      <Page {...{err, url, error}}/>
    )
  }
}

ErrorRoute.propTypes = {
  params: T.shape({
    err: T.string,
  }).isRequired
};

export default ErrorRoute;