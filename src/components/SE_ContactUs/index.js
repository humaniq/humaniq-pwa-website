import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
const cn = cssClassName('SE_Founders');
import A_H from 'A_H';

class SE_Founders extends Component {

  render() {
    return (
      <div>
        <A_Container type='wide'>
          <div className={cn('founders')}>
            <div className={cn('founders-title')}>
              <A_H type='section'>Humaniq Founders</A_H>
            </div>
            <div className={cn('founders-container')}>
              <div className={cn('founders-image')}>
              </div>
              <div className={cn('founders-image')}>
              </div>
              <div className={cn('founders-image')}>
              </div>
            </div>
          </div>
        </A_Container>
      </div>
    )
  }
}


export default SE_Founders
