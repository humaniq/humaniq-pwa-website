import React, {Component} from 'react';
import * as T from "prop-types";
import M_Title from 'M_Title'

class SE_Error extends Component {

  render() {
    const {err, url, error} = this.props
    let message;
    if(err === '500'){
      message = '500 internal server error'
    } else {
      message = '404 Not found'
    }

    return (
      <div>
        <M_Title center>{message}</M_Title>
        {url && <p>The requested resource "{url}" is not found.</p>}
        {error && <p>Error: {error}</p>}
      </div>
    )
  }
}

SE_Error.propTypes = {
  err: T.string.isRequired,
};

export default SE_Error