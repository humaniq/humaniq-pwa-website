import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
const cn = cssClassName('SE_Founders');

class SE_Founders extends Component {

  render() {
    return (
      <div>
        <A_Container type='wide'>
          <div className={cn('founders-container')}>
            <div className={cn('founders-title')}>
              <span>Humaniq Founders</span>
            </div>
            <div className={cn('founders-image')}>

            </div>
            <div className={cn('founders-image')}>

            </div>
            <div className={cn('founders-image')}>

            </div>
          </div>
        </A_Container>
      </div>
    )
  }
}

SE_Founders.propTypes = {
};

export default SE_Founders
