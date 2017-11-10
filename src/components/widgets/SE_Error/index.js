import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Error');
import A_Container from 'A_Container'
import A_H from 'A_H';
import A_P from 'A_P';
import A_Link from 'A_Link';


class SE_Error extends Component {

  render() {
    const {err,
      // url,
      // error
    } = this.props
    let message;
    if(err === '500'){
      message = '500 internal server error'
    } else {
      message = 'Welp, we searched all through the back end, and we couldn’t find the page you’re looking for'
    }

    return (
      <div className={cn('section-wrapper')}>
        <A_Container type='equal'>
          <div className={cn('error')}>

            <div className={cn('error-main')}>
              <div className={cn('error-main-image')}>
                <img src="/img/humaniq-logos/group.png" alt="Humaniq"/>
              </div>
              <div className={cn('error-main-message')}>
                <A_H type='xxl'>{err}</A_H>
                <span className={cn('message')}>{message}!</span>
                <A_P type='hero'>
                  <A_Link to={'/'} type='primary'>Go back to home page »</A_Link>
                </A_P>
              </div>
            </div>
          </div>
        </A_Container>
      </div>
    )
  }
}

SE_Error.propTypes = {
  err: T.string,
};

SE_Error.defaultProps = {
  err: '404',
};
export default SE_Error
