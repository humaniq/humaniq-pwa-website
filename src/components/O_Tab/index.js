import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_Tab');
import A_Container from 'A_Container';


class O_Tab extends Component {
  state = {
    active: '1'
  };

  handleTabClick = (e) => {
    this.setState({ active: e.target.name });
  };

  render() {
    const { active } = this.state;
    return (
      <div>
        <div className={cn('tab')}>
          <A_Container type='wide'>
            <nav className={cn('underline-nav')}>
              <ul className={cn('underline-nav__list')}>
                <li className={cn('underline-nav__li')} >
                  <a
                    className={cn('underline-nav__a', { active: active === '1'})}
                    href="javascript:void(0);"
                    name="1"
                    onClick={this.handleTabClick}
                  >
                    Transaction Log
                  </a>
                </li>
                <li className={cn('underline-nav__li')} name="2">
                  <a className={cn('underline-nav__a', { active: active === '2'})}
                     href="javascript:void(0);"
                     name="2"
                     onClick={this.handleTabClick}
                  >Token Holders</a>
                </li>
                <li className={cn('underline-nav__li')} name="3">
                  <a className={cn('underline-nav__a', { active: active === '3'})}
                     href="javascript:void(0);"
                     name="3"
                     onClick={this.handleTabClick}>Markets</a>
                </li>
              </ul>
            </nav>
          </A_Container>
        </div>
      </div>
    )
  }
}


O_Tab.propTypes = {};

export default O_Tab