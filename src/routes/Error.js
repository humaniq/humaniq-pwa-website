import React, {Component} from 'react';
import T from "prop-types";
import SE_Error from 'SE_Error'

class ErrorRoute extends Component {

  render() {
    const {params:{err}, location:{query:{url, error}}} = this.props
    return (
      <SE_Error {...{err, url, error}}/>
    )
  }
}

ErrorRoute.propTypes = {
  params: T.shape({
    err: T.string,
  }).isRequired
};

export default ErrorRoute;