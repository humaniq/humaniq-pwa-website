import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_PersonalHeader');
import A_Container from 'A_Container';
import A_Image from 'A_Image';


class O_PersonalHeader extends Component {

  render() {
    const { type } = this.props;
    return (
      <div>
        <A_Container type='wide'>
          <section className={cn('section-header')}>
            <A_Image type={type} src='/img/mock/holder_120x120.png' alt='avatar-sm '/>
            <p className={cn('phone')}>+1 (416) 464 7135</p>
          </section>
        </A_Container>
      </div>
    )
  }
}


O_PersonalHeader.propTypes = {};

export default O_PersonalHeader