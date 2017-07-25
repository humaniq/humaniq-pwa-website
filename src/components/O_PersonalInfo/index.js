import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_PersonalInfo');
import A_Container from 'A_Container';
import A_Image from 'A_Image';

import A_P from 'A_P'


class O_PersonalInfo extends Component {

  render() {
    const { type } = this.props;
    return (
      <div>
          <A_Container type='wide'>
            <section className={cn('info')}>

              <A_Image type={type} src='/img/mock/holder_120x120.png' alt='avatar '/>
              <div className={cn('phone')}>
                <A_P type='third-center'>+1 (416) 464 7135</A_P>
              </div>
              <div className={cn('description')}>
                <A_P type='third-center'>Invites you to join Humaniq. As soon as you complete the registration process, you will get $1 USD.</A_P>
              </div>

            </section>
          </A_Container>
      </div>
    )
  }

}


O_PersonalInfo.propTypes = {};

export default O_PersonalInfo