import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HmqLayoutNavBar')
import A_Container from 'A_Container';

class SE_HmqLayoutNavBar extends Component {

  state = {
    active: '1'
  };

  handleTabClick = (e) => {
    this.setState({ active: e.target.name });
  };


  render() {
    const { active } = this.state;

    return (
      <div className={cn('navigation')}>
        <A_Container>
          <div className={cn('flex-nav')}>
            <nav className={cn('nav')}>
              <ul className={cn('nav-list')}>
                <li className={cn('nav-li')} >
                  <a
                    className={cn('nav-a', { active: active === '1'})}
                    href="javascript:void(0);"
                    name="1"
                    onClick={this.handleTabClick}>Home
                  </a>
                </li>
                <li className={cn('nav-li')} name="2">
                  <a className={cn('nav-a', { active: active === '2'})}
                     href="javascript:void(0);"
                     name="2"
                     onClick={this.handleTabClick}>Transaction Log
                  </a>
                </li>
                <li className={cn('nav-li')} name="3">
                  <a className={cn('nav-a', { active: active === '3'})}
                     href="javascript:void(0);"
                     name="3"
                     onClick={this.handleTabClick}>Token Holders
                  </a>
                </li>
                <li className={cn('nav-li')} name="4">
                  <a className={cn('nav-a', { active: active === '4'})}
                     href="javascript:void(0);"
                     name="4"
                     onClick={this.handleTabClick}>Markets
                  </a>
                </li>
              </ul>
            </nav>
            <form action="" className={cn('search-form')}>
              <input type="text"
                     className={cn('search-input')}
                     placeholder="Search TxHash or Address"
              />
              <button className={cn('search-icon')}></button>
            </form>
          </div>
        </A_Container>
      </div>
    )
  }
}

SE_HmqLayoutNavBar.propTypes = {
};

SE_HmqLayoutNavBar.defaultProps = {
}

export default SE_HmqLayoutNavBar
