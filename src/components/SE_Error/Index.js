import React, {Component} from 'react';
import * as T from "prop-types";
import M_Title from 'M_Title'
import M_Page from 'M_Page'

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
      <M_Page headImg={{alt:message, src: 'https://i1.wp.com/www.itsjustabadday.com/wp-content/uploads/2016/11/Its-Just-A-Bad-Day-Not-A-Bad-Life-_-itsjustabadday.com_.png?fit=1024%2C512'}}>
        <M_Title center>{message}</M_Title>
        {url && <p>The requested resource "{url}" is not found.</p>}
        {error && <p>Error: {error}</p>}
      </M_Page>
    )
  }
}

SE_Error.propTypes = {
  err: T.string.isRequired,
};

export default SE_Error